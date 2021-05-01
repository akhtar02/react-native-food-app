import { SafeAreaView,FlatList, StyleSheet, Text, View, Image, 
  TextInput, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../consts/colors';
import { TestScheduler } from '@jest/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import categories from '../../consts/categories';
import foods from '../../consts/foods';


const HomeScreen = ({navigation}) => {

  const [selectedCategoryIndex, setSelectCategoryIndex] = React.useState(0);

  ListCategories=()=>{
    return(
        <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriestListcontainer}
        >

        {categories.map((category, index)=>(
          <TouchableOpacity key={index} activeOpacity={0.8}>
            <View style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImg}>
                <Image  
                source={category.image}
                style={{height:35, width:35, resizeMode: 'cover'}}
                />

              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  marginTop: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>

            </View>
          </TouchableOpacity>
        ))}
        </ScrollView>
    );
  };


  const Card = ({food})=>{
    return(

      <TouchableHighlight
      underlayColor={COLORS.white}
      activeOpacity={0.9}
      onPress={()=> navigation.navigate('DetailsScreen', food)}
      >
     
       <View style={style.card}>
          <View style={{alignItems: 'center', top: -20,}}>
            <Image source={food.image} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {food.ingredients}
            </Text>
          </View>

          <View style={{
          marginTop:10,
           marginHorizontal: 20,
          flexDirection:'row', 
          justifyContent:'space-between'
          }}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>
              ${food.price}

            </Text>
            <View style={style.addtoCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />

            </View>
          </View>

        </View>
        </TouchableHighlight>
    )
}   
 return (

      <SafeAreaView 
      style={{flex:1, backgroundColor: COLORS.white}}>
        <View style={style.header}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 28}}>Hello,</Text>
              <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}} >Ariz</Text>

            </View>
            <Text style={{fontSize: 22, marginTop:5, color: COLORS.grey}}>What do you want today</Text>
          </View>
        <Image source={require('../../assets/person.png')} 
        style={{height:50, width:50, borderRadius:25}} />
        </View>

        <View style={{marginTop: 40, flexDirection: 'row', paddingHorizontal: 20,}}> 
          <View style={style.inputContainer}>
          <Icon 
          name="search" size={28}/>
          <TextInput style={{flex: 1, fontSize: 18}}
            placeholder="Search for food"  />
          </View>
          <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
        </View>
       <View>
       <ListCategories />
       </View>
     
       <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />

    </SafeAreaView>
    )
}

export default HomeScreen

const style= StyleSheet.create({
  header:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    
  },
  inputContainer:{
    flex:1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriestListcontainer:{
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn:{
    height: 45,
    width: 120, 
    marginRight: 7,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',

  },
  categoryBtnImg:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: COLORS.white,
  },
  card:{
    marginVertical:10,
    marginLeft: 20,
    marginRight: 20,
    height: 220,
    width: 150,
    marginHorizontal: 25,
    marginBottom: 1,
    marginTop: 40,
    borderRadius: 15,
    elevation:13,
    backgroundColor:COLORS.white,
  },
  addtoCartBtn:{
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    borderRadius: 20,
    paddingLeft: 5,

  }
})

git 