/*
   Your name is Alejandro and you like purple
 */


/*
    Your name is Melissa and you like green
 */


/*
    Your name is undefined and you like green
 */

    function getUserData({ firstName, favoriteColor = 'green' }) {
        return `Your name is ${firstName} and you like ${favoriteColor}`;
      }
      
      console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // *
      console.log(getUserData({ firstName: 'Melissa' })); // **
      console.log(getUserData({})); // ***
