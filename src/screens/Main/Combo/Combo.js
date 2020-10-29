/* eslint-disable*/
import React, {useState} from "react"
import {View, Text, Image, Dimensions, TouchableOpacity, FlatList} from 'react-native'
import PropType from "prop-types"
import HeaderBack from "../../../components/HeaderBack/HeaderBack"
import {stylesCommon, stylesText, stylesUi} from '../../../static/styles'

let deviceWidth = Dimensions.get("window").width

const leftData = [
	{
		id: 1,
		name: "name 1",
		price: 12,
		img: "../../../static/img/pizza/p1.jpg"
	},
	{
		id: 2,
		name: "name 2",
		price: 132,
		img: "../../../static/img/pizza/p2.jpg"
	},
	{
		id: 3,
		name: "name 3",
		price: 112,
		img: "../../../static/img/pizza/p3.jpg"
	},
	{
		id: 4,
		name: "name 4",
		price: 142,
		img: "../../../static/img/pizza/p4.jpg"
	}
]

const rightData = [
	{
		id: 1,
		name: "name 1",
		price: 17,
		img: "../../../static/img/pizza/pr1.jpg"
	},
	{
		id: 2,
		name: "name 2",
		price: 212,
		img: "../../../static/img/pizza/pr2.jpg"
	},
	{
		id: 3,
		name: "name 3",
		price: 42,
		img: "../../../static/img/pizza/pr3.jpg"
	},
	{
		id: 4,
		name: "name 4",
		price: 11,
		img: "../../../static/img/pizza/pr4.jpg"
	}
]

const Combo = ({navigation}) =>{

	const[leftInfo, setLeftInfo] = useState([])
	const[rightInfo, setRightInfo] = useState([])

	/**
	 * Рандом
	 **/
	const random = () =>{
		// scrollToIndex(1)
	}

	/**
	 * Рендер левой части
	 **/
	const renderLeft = ({ item }) =>{
		return(
			<View style={[{height: 400}]}>
				<Image
					style={[stylesCommon.imgFill, {resizeMode: "contain"}]}
					source={require(`../../../static/img/pizza/p1.jpg`)}
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
					source={require(`../../../static/img/pizza/pr1.jpg`)}
				/>
				<Text style={[stylesText.h2, {position: "absolute", right: 10, top: 10, zIndex: 10}]}>{item.name}</Text>
				<Text style={[stylesText.h2, {position: "absolute", right: 10, bottom: 10, zIndex: 10}, stylesText.textRed]}>{item.price} $</Text>
			</View>
		)
	}


	/**
	 * Инфо по индексам
	 **/
	const onViewRefLeft = React.useRef((viewableItems)=> {
		setLeftInfo(viewableItems.viewableItems[0].item)
	})
	const onViewRefRight = React.useRef((viewableItems)=> {
		setRightInfo(viewableItems.viewableItems[0].item)
	})
	const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

	console.log("rightInfo",rightInfo)

	return(
		<>
			<View style={stylesCommon.mainContainer}>
				<HeaderBack navigation={navigation}/>
			</View>
			<View style={[stylesCommon.flexRow, stylesCommon.mt20]}>
				<View style={{width: "50%", maxHeight: 400, backgroundColor: "#fff"}}>
					<FlatList
						data={leftData}
						renderItem={renderLeft}
						keyExtractor={item => item.id + ""}
						pagingEnabled
						showsVerticalScrollIndicator={false}
						onViewableItemsChanged={onViewRefLeft.current}
						viewabilityConfig={viewConfigRef.current}
					/>
				</View>
				<View style={{width: "50%", maxHeight: 400, backgroundColor: "#fff"}}>
					<FlatList
						data={rightData}
						renderItem={renderRight}
						keyExtractor={item => item.id + ""}
						pagingEnabled
						showsVerticalScrollIndicator={false}
						onViewableItemsChanged={onViewRefRight.current}
						viewabilityConfig={viewConfigRef.current}
					/>
				</View>
			</View>
			<View>
				<Text>Итого: {leftInfo.price} + {rightInfo.price} = {leftInfo.price + rightInfo.price} $</Text>
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


// <ScrollView pagingEnabled style={{width: "50%", maxHeight: 470, backgroundColor: "#fff"}}>
// {leftData.map( (i, index)=>(
// 	<View key={index} style={[{height: 400}, stylesCommon.mt40]}>
// 		<Image
// 			style={[stylesCommon.imgFill, {resizeMode: "contain"}]}
// 			source={require(`../../../static/img/pizza/p1.jpg`)}
// 		/>
// 	</View>
// ))}
//
// </ScrollView>
//
//
//
// <ScrollView pagingEnabled style={{width: "50%", maxHeight: 470, backgroundColor: "#fff"}}>
// {rightData.map( (i, index)=>(
// <View key={index} style={[{height: 400}, stylesCommon.mt40]}>
// <Image
// style={[stylesCommon.imgFill, {resizeMode: "contain"}]}
// source={require(`../../../static/img/pizza/pr1.jpg`)}
// />
// </View>
// ))}
// </ScrollView>
