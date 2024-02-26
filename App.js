import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View ,Image,FlatList,Animated,TouchableOpacity} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {Button,ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="keto" component={Keto} options={{title: 'KETO FOR LIFE'}}/>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'About Keto'}}/>
        <Stack.Screen name="Routine" component={DietRoutine} />
        <Stack.Screen name="For BreakFast" component={BreakFast}/>
        <Stack.Screen name="For Lunch" component={Lunch}/>
        <Stack.Screen name="For Dinner" component={Dinner}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Keto =({navigation}) => {
  return (
    <ScrollView>
    <Text style ={{alignSelf:'center',fontWeight:'bold',fontSize:36,height:60}}>KETO DIET</Text>
    <Image
      source = {{
        uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRKxcf1pHg2ZR_tX_IjwzssZzCYPh0uXEaw&usqp=CAU',
      }}
      style={{width:400,height:250,alignSelf:'center'}}
      />
  
     <Text style={styles.edit1}>      The keto diet depletes the body of its sugar reserves, causing 
      it to break down fat for energy. 
      It may help people lose weight, manage acne, and improve heart health, among other benefits.</Text>
      <Text style={styles.edit1}>     The diet works by depleting the body of its sugar reserves. As a result, it will start to break down fat for energy. This results in the production of molecules called ketones that the body uses for fuel. When the body burns fats, it can also lead to weight loss.</Text>
      <Text style ={{fontWeight:'900',fontSize:18,height:30}}>To know more about KETO:</Text>
      <Text style = {{fontSize:12,fontWeight:'bold',height:20}}>check this out:</Text>
      <Button
      title="About Keto"
      onPress={() =>
        navigation.navigate('Home', {name: 'About Keto'})
      }
    />
    </ScrollView>

  );
};
const HomeScreen = ({navigation,route}) => {
  return (
    <ScrollView style = {styles.edit4}>
    <Text style ={{alignSelf:'center',fontWeight:'bold',fontSize:36,height:60}}>Keto Diet</Text>
    <Image
      source = {{
        uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjmn2XOcHXN_IP0vwp7cjj2tsewpE9_rDUXkgWXw_UWo10RY71ofjEI-06v2CrZ8lTGs&usqp=CAU',
      }}
      style={{width:400,height:200,alignSelf:'center'}}
      />
    <Text style ={{fontWeight:'900',fontSize:18,height:30}}>What is KETO Diet:</Text>
    <Text style={styles.edit1}>    The ketogenic diet involves consuming a very low amount of carbohydrates and replacing them with fat to help your body burn fat for energy.
     Health benefits can include weight loss and lowering your risk for certain diseases.</Text>
    <Text style={styles.edit}>DIFFERENT TYPES OF KETOGENIC DIETS</Text>
    <Text style={{fontWeight:'900',fontSize:18,height:30}}>⦾Standard Ketogenic diet(SKD):</Text>
    <Text style={styles.edit1}>    This is a very low carb, moderate protein and high fat diet. It typically contains 70% fat, 20% protein, and only 10% carbs</Text>
    <Text style={{fontWeight:'900',fontSize:18,height:30}}>⦾Cyclical ketogenic diet(CKD):</Text>
    <Text style={styles.edit1}>    This diet involves periods of higher carb refeeds, such as 5 ketogenic days followed by 2 high carb days.</Text>
    <Text style={{fontWeight:'900',fontSize:18,height:30}}>⦾Targeted ketogenic diet(TKD):</Text>
    <Text style={styles.edit1}>    This diet allows you to add carbs around workouts.</Text>
    <Text style={{fontWeight:'900',fontSize:18,height:30}}>⦾High protein ketogenic diet:</Text>
    <Text style={styles.edit1}>    This is similar to a standard ketogenic diet, but includes more protein. The ratio is often 60% fat, 35% protein, and 5% carbs.</Text>
    <Text style ={{fontWeight:'bold',fontSize:18,height:30}}>Other health benefits of keto</Text>
    <Text style={styles.edit1}><Text style={{fontWeight:'bold',fontSize:18,height:30}}>⦾Heart Disease:  </Text>The ketogenic diet can help improve risk factors like body fat, HDL (good) cholesterol levels, blood pressure, and blood sugar.
Cancer. The diet is currently being explored as an additional treatment for cancer, because it may help slow tumor growth. .</Text>
<Text style={{fontWeight:'bold',fontSize:18,height:30}}>⦾Alzheimer’s disease.</Text> 
<Text style={styles.edit1}>The keto diet may help reduce symptoms of Alzheimer’s disease and slow its progression</Text>
<Text style={{fontWeight:'bold',fontSize:18,height:30}}>⦾Epilepsy.</Text>
<Text style={styles.edit1}> Research has shown that the ketogenic diet can cause significant reductions in seizures in epileptic children.</Text>
<Text style={{fontWeight:'bold',fontSize:18,height:30}}>⦾Parkinson’s disease.</Text>
<Text style={styles.edit1}>Although more research is needed, one study found that the diet helped improve symptoms of Parkinson’s disease.</Text>
     <Button
      title="Daily Routine ideas"
      onPress={() =>
        navigation.navigate('Routine', {name: 'Daily Routine ideas'})
      }
    />
    </ScrollView>
  );
};
const DietRoutine = ({navigation,route}) => {
  return (
    <ScrollView style = {styles.edit4}>
    <Text style ={{alignSelf:'center',fontWeight:'bold',fontSize:36,height:60}}>BREAKFAST:</Text>
    <Image
      source = {{
        uri:'https://i.pinimg.com/736x/52/9b/75/529b754d7273e3d5cbcca71c3b432a8e.jpg',
      }}
      style={{width:400,height:250,alignSelf:'center'}}
      />
    <Button
      title="BREAKFAST ideas" onPress={() =>
        navigation.navigate('For BreakFast', {name: 'BREAKFAST ideas'})}/>
    <Text style ={{alignSelf:'center',fontWeight:'bold',fontSize:36,height:60}}>LUNCH:</Text>
    <Image
      source = {{
        uri:'https://pipingpotcurry.com/wp-content/uploads/2019/09/Anda-Bhurji-Piping-Pot-Curry.webp ',
      }}
      style={{width:400,height:250,alignSelf:'center'}}
      />
    <Button
      title="LUNCH ideas" onPress={() =>
        navigation.navigate('For Lunch', {name: 'LUNCH ideas'})}/>
    <Text style ={{alignSelf:'center',fontWeight:'bold',fontSize:36,height:60}}>DINNER:</Text>
    <Image
      source = {{
        uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCB71hCo62sQ26_s6U0iFNHtnpibkmoz2o52LzJvvSvSuo2Kx0eTDBQUxL59FSVP9OmI&usqp=CAU',
      }}
      style={{width:400,height:250,alignSelf:'center'}}
      />
    <Button
      title="DINNER ideas" onPress={() =>
        navigation.navigate('For Dinner', {name: 'DINNER ideas'})}/>
    </ScrollView>

  );
};
const BreakFast = ({navigation,route}) => {
  return (
    <ScrollView style = {styles.edit4}>
    <Text style ={{alignSelf:'center',fontWeight:'bold',fontSize:36,height:60}}>BREAKFAST:</Text>
    <Text style={{fontWeight:'900',fontSize:18,height:30}}>⦾Gram Flour Pancake:</Text>
    <Image
      source = {{
        uri:'https://www.indianveggiedelight.com/wp-content/uploads/2023/02/besan-chilla-recipe.jpg ',
      }}
      style={{width:400,height:250,alignSelf:'center'}}
      />
      <Text style={{fontWeight:'900',fontSize:18,height:30}}>Nutrients Value:</Text>
      <Text style={styles.edit1}>
Nutrition: 110 calories{"\n"}
Protein: 4 g{"\n"}
Carb: 2g{"\n"}
Fibre: 1 g fibre{"\n"}
Fat: 10g</Text>
<Text style={{fontWeight:'900',fontSize:18,height:30}}>Recipe:</Text>
<Text style={styles.edit1}>In a mixing bowl, add the besan, onions, tomatoes, green chilies, grated ginger, ajwain seeds, turmeric, red chili powder, and salt.
Gradually add water and whisk until you get a smooth, lump-free, and pouring consistency batter.
step to prepare the besan chilla batter collage
Heat a seasoned iron tawa or non-stick pan over medium heat. Grease some oil on the skillet.
Once the skillet is hot, pour a ladleful of batter in the center and quickly spread it evenly in a circular motion to form a thin and round cheela. Drizzle some oil (or ghee) around the edges of the chilla.
step to grease the tawa and make chilla collage
Cook the chilla for about 1-2 minutes or until the base turns light golden. Flip it using a spatula and cook the other side until you see golden spots.
step to cook the pancakes collage
Serve hot or warm with chutney of your choice or tomato ketchup and tea.</Text>

<Text style={{fontWeight:'900',fontSize:18,height:30}}>⦾Upma:</Text>
    <Image
      source = {{
        uri:'https://veg.fit/wp-content/uploads/2022/05/6-min.jpg',
      }}
      style={{width:400,height:250,alignSelf:'center'}}
      />
      <Text style={{fontWeight:'900',fontSize:18,height:30}}>Nutrients Value:</Text>
      <Text style={styles.edit1}>
      Nutrition: 223 calories{"\n"}
      Protein:5g{"\n"}   
Carb: 9g{"\n"}
Fibre:3g{"\n"}
Fat: 20g{"\n"}
</Text>

<Text style={{fontWeight:'900',fontSize:18,height:30}}>Recipe</Text>
<Text style={styles.edit1}>Start by roasting the sooji along with one teaspoon of cumin (jeera) until it's fragrant on a medium-low flame in a pan.
Do not burn or brown the sooji from the bottom, so be careful. Remove it into a clean, dry bowl or plate.
**Note: You can do this step of roasting sooji in advance and save time for busy mornings.
step to roast semolina and jeera collage
Add oil to a heavy bottom pan, add mustard seeds, chana dal, urad dal, and cashew nuts, and saute for 1 minute until they change color.

Next, add chopped ginger, green chilies, asafetida, and curry leaves. Saute another 20 secs.
step to temper upma with spices curry leaves ginger collage
Next add water, milk and let the water come to a boil. Do not add salt directly at this stage; milk will curdle.

Once the water & milk comes to a boil, add salt, and start adding the (roasted sooji + jeera) a little at a time. Stir continuously after each addition in one direction with a spatula to avoid lumps.
step to boil water and milk and then add roasted rava collage
Then cover the pan with the lid and set the heat to low. Let it remain like that for 2-3 mins until the moisture gets absorbed. Turn off the heat.
Remove lid, add lemon juice, coriander leaves, and two tablespoons of ghee. Ghee is optional but recommended. Mix well.
step to cook and add ghee and cilantro collage
Serve hot with coconut chutney, pickle, and sambar.</Text>

    </ScrollView>
    
  );

};
const Lunch = ({navigation,route}) => {
  return (
    <ScrollView style = {styles.edit4}>
    <Text style ={{alignSelf:'center',fontWeight:'bold',fontSize:36,height:60}}>LUNCH:</Text>
    <Text style={{fontWeight:'900',fontSize:18,height:30}}>⦾Poha:</Text>
    <Image
      source = {{
        uri:'https://www.indianveggiedelight.com/wp-content/uploads/2019/07/cauliflower-rice-poha-featured-360x360.jpg ',
      }}
      style={{width:400,height:250,alignSelf:'center'}}
      />
      <Text style={{fontWeight:'900',fontSize:18,height:30}}>Nutrients Value:</Text>
      <Text style={styles.edit1}>
      Nutrition: 88Calories{"\n"}
      Protein: 1g{"\n"}
      Carbohydrates: 6g{"\n"}
      Fiber:2g{"\n"}
      Fat:6g{"\n"}</Text>
<Text style={{fontWeight:'900',fontSize:18,height:30}}>Recipe:</Text>
<Text style={styles.edit1}>Gently rinse poha in a colander under running water 2-3 times until they soften and then drain out all the water. When you press with your fingers, it should break easily. Keep it aside.
step to rinse the poha collage
Heat oil in a Kadai. Add raw peanuts and fry until they turn golden brown. Remove the peanuts to a plate and set them aside.
step to roast the peanuts collage
In the same kadai, add mustard and cumin seeds and let them splutter.

Then add green chilies, curry leaves, and chopped onion. Saute until onions turn soft and translucent.
step to prepare the tempering and cook onions collage

Next, add cubed potatoes (or mixed vegetables) and cook for 2-3 minutes.
Cover and cook on medium-low heat till the potatoes are soft and perfectly cooked. Sprinkle some water if required. (You can also use pre-boiled cubed potatoes to it and saute for 2 minutes).
step to cook potatoes for kanda poha collage
Add rinsed and drained poha, turmeric, salt, and sugar. Mix everything well.
If you feel the poha is too dry, sprinkle some water all over. Cover it with a lid and cook for 2 minutes on low heat.
step to add pohe and spices and cook collage
Turn off the heat. Add the lemon juice and roasted peanuts, and give a quick mix. Garnish with coriander leaves.
step to garnish with roasted peanuts and coriander leaves for poha recipe collage
</Text>

<Text style={{fontWeight:'900',fontSize:18,height:30}}>⦾Keto cauliflower gravy:</Text>
    <Image
      source = {{
        uri:'https://www.indianveggiedelight.com/wp-content/uploads/2021/02/cauliflower-coconut-curry-instant-pot-1152x1536.jpg',
      }}
      style={{width:400,height:250,alignSelf:'center'}}
      />
      <Text style={{fontWeight:'900',fontSize:18,height:30}}>Nutrients Value:</Text>
      <Text style={styles.edit1}>
      Nutrition: 88 calories{"\n"}
      Carbohydrates: 6g{"\n"}
      Protein: 1g {"\n"}
      Fat: 6g{"\n"}
      Fiber:2g{"\n"}
</Text>

<Text style={{fontWeight:'900',fontSize:18,height:30}}>Recipe</Text>
<Text style={styles.edit1}>Heat oil in a pot, Once the oil, is hot add cumin seeds, bay leaf, and let cumin splutter.
Then add onions, ginger-garlic paste, and saute until onions turn light brown for 3-4 minutes.
Next add the crushed tomatoes along with the juice or tomato puree or sauce, full-fat coconut milk, and dry spices like red chili powder, turmeric powder, garam masala powder, coriander powder, salt, cauliflower florets, and stir well.
Cover the lid and cook for 10-15 minutes, stirring occasionally, until the cauliflower softens and absorbs the flavors.
Lastly, squeeze fresh lemon juice and garnish with cilantro. Serve Indian style Cauliflower Curry hot with basmati rice or quinoa.</Text>
</ScrollView>

  );
};
const Dinner = ({navigation,route}) => {
  return (
    <ScrollView style = {styles.edit4}>
    <Text style ={{alignSelf:'center',fontWeight:'bold',fontSize:36,height:60}}>DINNER:</Text>
    <Text style={{fontWeight:'900',fontSize:18,height:30}}>⦾KETO CHICKEN KORMA::</Text>
    <Image
      source = {{
        uri:'https://cdn.beautyandthefoodie.com/wp-content/uploads/2018/03/Chicken-Korma-8719-2-1med-2.jpg',
      }}
      style={{width:400,height:250,alignSelf:'center'}}
      />
      <Text style={{fontWeight:'900',fontSize:18,height:30}}>Nutrients Value:</Text>
      <Text style={styles.edit1}>
      Nutrition
Calories: 296kcal{"\n"}
Carbohydrates: 5g{"\n"}
Protein: 8g{"\n"} 
Fat: 17g{"\n"}
Fiber: 3g{"\n"}</Text>
<Text style={{fontWeight:'900',fontSize:18,height:30}}>Recipe:</Text>
<Text style={styles.edit1}>Place garlic and ginger, in a food processor and blend until smooth; set aside.
Heat ghee or butter over medium heat. Add onion, and cook until soft, about 3 to 5 minutes.
Add and mix in the garlic & ginger paste. Add coriander, garam masala, cumin, turmeric, and chili powder. Stir until combined.
Stir in diced chicken, and cook for about 5 minutes.
Pour tomato sauce and chicken broth over chicken. Heat until broth starts bubbling, then cover, reduce heat, and simmer for 15 minutes, stirring occasionally.
In a food processor add: almond butter, coconut milk and yogurt. Process until smooth.
Stir the almond butter coconut milk mixture into the chicken and sauce.  Cover and simmer on low heat for 10 to 12 minutes, stirring occasionally. Serve. Can also serve this over cauliflower rice.</Text>

<Text style={{fontWeight:'900',fontSize:18,height:30}}>⦾INDIAN ROASTED VEGETABLES:</Text>
    <Image
      source = {{
        uri:'https://d104wv11b7o3gc.cloudfront.net/wp-content/uploads/2016/05/roasted-vegetable-masala-3-2.jpg ',
      }}
      style={{width:400,height:250,alignSelf:'center'}}
      />
      <Text style={{fontWeight:'900',fontSize:18,height:30}}>Nutrients Value:</Text>
      <Text style={styles.edit1}>
      Nutrition: 223 calories{"\n"}
      Protein:5g{"\n"}   
Carb: 9g{"\n"}
Fibre:3g{"\n"}
Fat: 20g{"\n"}
</Text>

<Text style={{fontWeight:'900',fontSize:18,height:30}}>Recipe</Text>
<Text style={styles.edit1}>Preheat oven to 400F or toaster oven to 375F. Place rack to middle position Cover a sheet pan in foil for easy clean up.
Cut the vegetables. Mince the garlic and ginger.
Add the tomato puree, spices, minced garlic and ginger to a medium bowl, Stir in the liquid ghee or oil. Add the vegetables and stir to coat.
Spread the vegetables into one layer on the prepared sheet pan and season with salt and pepper.
Roast in the oven for 20 minutes or until the veggies are cooked to your liking.
Alternate Cooking Method: Add the oil to a non-stick frying pan over medium-high heat. When hot, add the vegetables, ginger & garlic, and stir. Saute until crisp tender. Turn the heat down to medium and add the tomato sauce and spices. Cook until the sauce reduces a bit and the vegetables are cooked. Season to taste with salt and pepper. Serve.</Text>
</ScrollView>

  );
};
const styles = StyleSheet.create({
  edit:{
    color: 'black',
    fontWeight:'bold',
    alignSelf:'center',
    fontSize:20
    
  },
  edit1:{
    color:'black',
    fontStyle:'italic',
    alignSelf:'center',
    fontSize:16
    

  },
  edit2:{
    color:'black',
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:32,
    height:30
  },
  edit3:{
    color:'black',
    fontWeight:'600',
    fontSize:24,
  },
  edit4:{
    scrollView:{
      marginHorizantal:40
    }

  },



});
export default MyStack;
