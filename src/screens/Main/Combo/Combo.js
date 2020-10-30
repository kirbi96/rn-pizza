/* eslint-disable*/
import React, {useRef, useState} from "react"
import {View, Text, Image, TouchableOpacity, FlatList} from "react-native"
import PropType from "prop-types"
import HeaderBack from "../../../components/HeaderBack/HeaderBack"
import {stylesCombo, stylesCommon, stylesText, stylesUi} from '../../../static/styles';

const leftData = [
	{
		id: 1,
		name: "name 1",
		price: 12,
		img: "https://sun9-45.userapi.com/htyy_mWs2NUR1XbAmzMWKfDMqb3jPX9InnJ3vg/fIbFZzQTQPg.jpg"
	},
	{
		id: 2,
		name: "name 2",
		price: 132,
		img: "https://sun9-29.userapi.com/SMTPk4hEo-l246tPeyIJEGZPrmcTHhfCokOGVA/MQ4uDNdWQwo.jpg"
	},
	{
		id: 3,
		name: "name 3",
		price: 112,
		img: "https://sun9-67.userapi.com/jTKgfc_XvYUMBECNVQjHVlvfRWGTfgST49Uj3g/3dIM7QAGn0k.jpg"
	},
	{
		id: 4,
		name: "name 4",
		price: 142,
		img: "https://sun9-39.userapi.com/9H_NFhBslTXdTA7BIHmHGfkLUYSNOU9H7WYrkQ/7XoocZtAcTY.jpg"
	}
]

const rightData = [
	{
		id: 1,
		name: "name 1",
		price: 17,
		img: "https://sun9-40.userapi.com/5GdWO5WyprZPrLFlOnS6GDTc9NXSWetf25pkow/9y5-TLIeuOg.jpg"
	},
	{
		id: 2,
		name: "name 2",
		price: 212,
		img: "https://sun9-10.userapi.com/N4iSLS75dHSUhmE_WNfAKAF34rxw0y7QPu0_2w/uBd-QXGsPMw.jpg"
	},
	{
		id: 3,
		name: "name 3",
		price: 42,
		img: "https://sun9-53.userapi.com/nkG10r6XruEwOHNHKLpxZ4gnKGip3uhsmV9kzQ/3411KcZBFyI.jpg"
	},
	{
		id: 4,
		name: "name 4",
		price: 11,
		img: "https://sun9-26.userapi.com/o4JjldhL0Yrxc33Tgw1R7FMSBsvlw0XKRJ2lRQ/ptuMcV7Za_E.jpg"
	}
]

const Combo = ({navigation}) =>{
	const leftRandomRef = useRef()
	const rightRandomRef = useRef()

	const[leftInfo, setLeftInfo] = useState([])
	const[rightInfo, setRightInfo] = useState([])


	/**
	 * Рендер левой части
	 **/
	const renderLeft = ({ item }) =>{
		return(
			<View style={[{height: 400}]}>
				<Image
					style={[stylesCommon.imgFill, {resizeMode: "contain"}]}
					source={{
						uri: item.img
					}}
				/>
				<Text style={[stylesText.h2, {position: "absolute", left: 10, top: 10, zIndex: 10}]}>{item.name}</Text>
				<Text style={[stylesText.h2, {position: "absolute", left: 10, bottom: 10, zIndex: 10}, stylesText.textRed]}>{item.price} $</Text>
			</View>
		)
	}

	/**
	 * Рендер правой части
	 **/
	const renderRight = ({ item }) =>{
		return(
			<View style={[{height: 400}]}>
				<Image
					style={[stylesCommon.imgFill, {resizeMode: "contain"}]}
					source={{
						uri: item.img
					}}
				/>
				<Text style={[stylesText.h2, {position: "absolute", right: 10, top: 10, zIndex: 10}]}>{item.name}</Text>
				<Text style={[stylesText.h2, {position: "absolute", right: 10, bottom: 10, zIndex: 10}, stylesText.textRed]}>{item.price} $</Text>
			</View>
		)
	}


	/**
	 * Инфо по индексам
	 **/
	const onViewRefLeft = useRef((viewableItems)=> {
		setLeftInfo(viewableItems.viewableItems[0].item)
	})
	const onViewRefRight = useRef((viewableItems)=> {
		setRightInfo(viewableItems.viewableItems[0].item)
	})
	const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })


	/**
	 * Рандом
	 **/
	const random = () =>{
		let randomLeftIndex = Math.floor(Math.random((1))* leftData.length)
		let randomRightIndex = Math.floor(Math.random((1))* rightData.length)

		leftRandomRef.current.scrollToIndex({animated: true, index: randomLeftIndex})
		rightRandomRef.current.scrollToIndex({animated: true, index: randomRightIndex})
	}


	return(
		<>
			<View style={stylesCommon.mainContainer}>
				<HeaderBack navigation={navigation}/>
			</View>
			<View style={[stylesCommon.flexRow, stylesCommon.mt20]}>
				<View style={stylesCombo.partFlatList}>
					<FlatList
						data={leftData}
						renderItem={renderLeft}
						keyExtractor={item => item.id + ""}
						ref={leftRandomRef}
						pagingEnabled
						showsVerticalScrollIndicator={false}
						onViewableItemsChanged={onViewRefLeft.current}
						viewabilityConfig={viewConfigRef.current}
					/>
				</View>
				<View style={stylesCombo.partFlatList}>
					<FlatList
						data={rightData}
						renderItem={renderRight}
						keyExtractor={item => item.id + ""}
						ref={rightRandomRef}
						pagingEnabled
						showsVerticalScrollIndicator={false}
						onViewableItemsChanged={onViewRefRight.current}
						viewabilityConfig={viewConfigRef.current}
					/>
				</View>
			</View>
			<View>
				{leftInfo.price && rightInfo.price &&(
					<Text>Итого: {leftInfo.price} + {rightInfo.price} = {leftInfo.price + rightInfo.price} $</Text>
				)}
			</View>
			<TouchableOpacity style={[stylesUi.btnRed,stylesCommon.mt10]}>
				<Text style={stylesUi.btnWhiteText}>Оформить заказ</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => random()} style={[stylesUi.btnRed,stylesCommon.mt10]}>
				<Text style={stylesUi.btnWhiteText}>random</Text>
			</TouchableOpacity>
		</>

	)
}

Combo.propTypes = {
	navigation: PropType.object,
}

export default Combo
