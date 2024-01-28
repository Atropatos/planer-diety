// import React, { useState, useEffect, Component } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { bmiCategory } from '../data/enums/bmiCategory.enum';
// import { Goal } from '../data/enums/goal.enum';
// import { NutritionType } from '../data/enums/nutritionType.enum';
// //import IngredientService from '../services/IngredientService';
// import { IngredientService } from "../services/IngredientService";
// import { AuthService } from '../services/AuthService';

// export default function HomeComponent () {
//   const authService = AuthService();
//   const history = useHistory();

//   const [ingredient, setIngredient] = useState(null);
//   const [user, setUser] = useState(null);
//   const [jakasKategoriaCzyCos, setJakasKategoriaCzyCos] = useState(null);
//   const [userBMI, setUserBMI] = useState(0);
//   const [userBMR, setUserBMR] = useState(0);
//   const [userTDEE, setUserTDEE] = useState(0);
//   const [userCalories, setUserCalories] = useState(0);
//   const [userCaloriesPercentage, setUserCaloriesPercentage] = useState(0);
//   const [goalCalories, setGoalCalories] = useState(0);
//   const [editing, setEditing] = useState(false);
//   const [selectedMeals, setSelectedMeals] = useState([]);
//   const [totalMealCalories, setTotalMealCalories] = useState(0);
//   const [ingredients, setIngredients] = useState([]);
//   const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
//   const [tempHeight, setTempHeight] = useState(0);
//   const [tempWeight, setTempWeight] = useState(0);
//   const [tempGoal, setTempGoal] = useState(null);
//   const [tempActivity, setTempActivity] = useState('');
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [daytoday, setDayToday] = useState('');
//   const [yesterday, setYesterday] = useState('');
//   const [tomorrow, setTomorrow] = useState('');

//   useEffect(() => {
//     // Simulating the ngOnInit lifecycle method
//     setUser(authService.user);
//     setTempHeight(authService.user.height);
//     setTempWeight(authService.user.weight);
//     setTempGoal(authService.user.goal);
//     setTempActivity(authService.user.activityLevel);
//     getIngredients();

//     // For testing
//     setUserBMI(authService.user.bmi);
//     setUserBMR(authService.user.bmr);
//     setUserTDEE(authService.user.tdee);
//     setJakasKategoriaCzyCos(authService.user.weightCategory);
//     setGoalCalories(authService.user.goalCalories);
//     setUserCaloriesPercentage(authService.user.calories);
//   }, []);

//   const getIngredients = () => {
//     ingredientService.getIngredients().then(
//       (data) => {
//         setIngredients(data);
//         data.forEach((ingredient) => {
//           console.log('Ingredient taken:', ingredient.name);
//         });
//       },
//       (error) => {
//         console.error('Error fetching ingredients', error);
//       }
//     );
//   };

//   const togglePanel = () => {
//     setIsRightPanelOpen(!isRightPanelOpen);
//   };

//   // ... Rest of the component code ...

//   return (
//     <div className={`wrapper ${isRightPanelOpen ? 'rightPanelOpen' : ''}`}>
//       <div className="main">
//         <header>
//           <div className="topPanel">
//             <h1 id="welcome">Witaj <span id="userName">{user.name}</span></h1>
//             <p>{!editing ? 'Twój cel to :' : 'Twój cel to: '}
//               {!editing ? <span id="userGoal">{user.goal}</span> :
//                 <select value={tempGoal} onChange={(e) => setTempGoal(e.target.value)}>
//                   {goals.map(goal => (
//                     <option key={goal} value={goal}>{goal}</option>
//                   ))}
//                 </select>
//               }
//             </p>
//           </div>
//         </header>
  
//         <div className="bodyDetails">
//             <p>Twój wskaźnik <span className="normal">{!editing ? 'BMI' : 'BMI'}</span> wynosi: <span>{userBMI.toFixed(2)}</span></p>

//             {editing && (
//                 <div>
//                 <p>
//                     <span>wzrost:</span>
//                     <input type="text" value={tempHeight} onChange={(e) => setTempHeight(e.target.value)} />
//                     <span>waga:</span>
//                     <input type="text" value={tempWeight} onChange={(e) => setTempWeight(e.target.value)} />
//                 </p>
//                 </div>
//             )}

//             <p>
//                 Co umiejscawia Cię w kategorii:
//                 <span id="userCategory">{jakasKategoriaCzyCos}</span>
//             </p>

//             <p>
//                 Twój podstawowy metabolizm:
//                 <span>{userBMR.toFixed(0)}</span>
//                 kalorii na dzień
//             </p>

//             <p>
//                 Uwzględniając Twój{' '}
//                 <span className="normal">{!editing ? 'poziom aktywności' : 'poziom aktywności'}</span>
//                 <span>{editing && (
//                 <select value={tempActivity} onChange={(e) => setTempActivity(e.target.value)}>
//                     <option value="niski">niski poziom aktywności</option>
//                     <option value="lekki">lekki poziom aktywności - 1-3 treningi/tydzień</option>
//                     <option value="umiarkowany">umiarkowany poziom aktywności - 3-5 treningów/tydzień</option>
//                     <option value="wysoki">wysoki poziom aktywności - 6-7 treningów/tydzień</option>
//                     <option value="ultra">najwyższy poziom aktywności - 2 treningi/dzień lub praca fizyczna</option>
//                 </select>
//                 )}</span>
//                 , aby <span>{user.goal}</span>, potrzebujesz przyjmować{' '}
//                 <span>{(userTDEE + goalCalories).toFixed(0)}</span> kalorii dziennie
//             </p>
//             </div>

  
//             <div className="callendar">
//                 <div className="yesterday">
//                     <p>{yesterday}</p>
//                     <a href="../day-view">szczegóły</a>
//                 </div>

//                 <div className="today">
//                     <p>{daytoday}</p>
//                     <a href="../day-view">szczegóły</a>
//                 </div>

//                 <div className="tomorrow">
//                     <p>{tomorrow}</p>
//                     <a href="../day-view">szczegóły</a>
//                 </div>
//             </div>

  
//         <div className="bottomPanel">
//           <p>Spożyłeś dzisiaj już {userCalories.toFixed(0)} kalorii</p>
//           <p>co stanowi <span>{userCaloriesPercentage.toFixed(0)}/100</span>%</p>
//         </div>
        
//         <div className="progress-bar-container">
//           <progress value={userCaloriesPercentage} max={100}></progress>
//           <span>{userCalories} / {userTDEE + goalCalories.toFixed(0)} calories</span>
//         </div>
  
//         <div appDirective>Historia posiłkow:</div>
//         <p>{today.toDateString()}</p>
  
//         <footer>
//           Planer diety by Kacper Góralczyk, Dawid Dłuski, Maciej Borys. All rights reserved
//         </footer>
//       </div> {/* end of main */}
  
//       <button className="rightPanelButton" type="button" onClick={togglePanel}>
//         <span>=</span>
//       </button>
  
//       <div className="rightPanel">
//         <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="avatar" />{user.Username}
//         <span className="edit" onClick={edit} style={{ display: !editing ? 'inline' : 'none' }}>[edytuj]</span>
//         <span className="save" onClick={save} style={{ display: editing ? 'inline' : 'none' }}>[zapisz]</span>
//         <a className="logout" onClick={logout}>[wyloguj]</a>
//         <br />
//         Dzisiejsze posiłki:
//         <app-meal mealSelect={onMealSelected} />
//       </div>
  
//       {/* Display Ingredients */}
//       {ingredients && ingredients.length > 0 && (
//         <div>
//           {ingredients.map((ingredient) => (
//             <div key={ingredient.name}>
//               <h2>{ingredient.name}</h2>
//               <ul>
//                 {ingredient.nutritionals.map((nutritional) => (
//                   <li key={nutritional.type}>
//                     {nutritional.type}: {nutritional.value}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
  
// };
