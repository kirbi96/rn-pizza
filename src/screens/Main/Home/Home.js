import React from "react"
import {View, Text, ScrollView, Image, Dimensions, TouchableOpacity} from "react-native"
import {stylesCommon, stylesText, stylesUi} from "../../../static/styles"
import PropType from "prop-types"

let deviceWidth = Dimensions.get("window").width

const bannerData = [
	{
		id: 1,
		banner: "https://i.pinimg.com/originals/8e/01/11/8e0111077bc105b14e7284cee7d2abe3.jpg"
	},
	{
		id: 2,
		banner: "https://www.ku66.ru/_nw/347/27229677.jpg"
	},
	{
		id: 3,
		banner: "https://sun9-76.userapi.com/c840227/v840227886/4da9b/hIT4ZNFsPrI.jpg?ava=1"
	},

]

const pizzaData = [
	{
		id: 1,
		img: "https://cdn.dodostatic.net/static/Img/Products/1e414bf6663645f592d166329e1fec83_292x292.jpeg",
		price: 13,
		name: "Карбонара",
		des: "Бекон, сыры чеддер и пармезан, моцарелла, томаты черри, лук, чеснок, сливочный соус, итальянские травы"
	},
	{
		id: 2,
		img: "https://cdn.dodostatic.net/static/Img/Products/04dff3cf16144112aabdd5f79182f663_292x292.jpeg",
		price: 33,
		name: "Деревенская",
		des: "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус"
	},
	{
		id: 3,
		img: "https://cdn.dodostatic.net/static/Img/Products/6289691b5edd41b6ad280fdc340c4e59_292x292.jpeg",
		price: 23,
		name: "Запеченное яблоко",
		des: "Яблоки, черная смородина, соус пломбир, лепестки миндаля, корица"
	},

]

const Home = ({navigation}) =>{
	return(
		<View style={stylesCommon.mainContainer}>
			<ScrollView  horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
				{bannerData.map((i, index) => (
					<View key={index} style={[{width: deviceWidth - 50, flex: 1, flexDirection: "row", height: 150, borderRadius: 10}, index !== 0 && stylesCommon.ml10]}>
						<Image
							style={[stylesCommon.imgFill, {borderRadius: 10}]}
							source={{
								uri: `${i.banner}`
							}}
						/>
					</View>
				))}
			</ScrollView>

			<View style={stylesCommon.mt10}>
				{pizzaData.map((i, index) => (
					<TouchableOpacity key={index} style={[stylesCommon.mt15, {flexDirection: "row"}]} >
						<View style={{width: 100, height: 100}}>
							<Image
								style={[stylesCommon.imgFill, {borderRadius: 10}]}
								source={{
									uri: i.img
								}}
							/>
						</View>
						<View style={[stylesCommon.ml10, {width: deviceWidth - 140}]}>
							<Text style={stylesText.h5}>{i.name}</Text>
							<Text style={[stylesCommon.mt5, stylesText.textGray]}>{i.des}</Text>
							<Text style={[stylesCommon.mt5, stylesText.textRed]}>{i.price} $</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>

			<TouchableOpacity onPress={() => navigation.navigate("Combo")} style={[stylesUi.btnRed,stylesCommon.mt10]}>
				<Text style={stylesUi.btnWhiteText}>Заказать комбо пиццу</Text>
			</TouchableOpacity>
		</View>
	)
}

Home.propTypes = {
	navigation: PropType.object,
}

export default Home


