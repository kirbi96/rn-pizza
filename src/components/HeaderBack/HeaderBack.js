import React from "react"
import {TouchableOpacity} from "react-native"
import PropType from "prop-types"
import IconBack from "../../static/img/icon/IconBack"

import {stylesCommon} from "../../static/styles"


const HeaderBack = ({ navigation: { goBack } }) =>{

    return(
        <TouchableOpacity onPress={() => goBack(null)} style={[stylesCommon.flexRow, stylesCommon.mt5, stylesCommon.pb15]}>
            <IconBack/>
        </TouchableOpacity>
    )
}

HeaderBack.propTypes = {
    navigation: PropType.object,
}

export default HeaderBack
