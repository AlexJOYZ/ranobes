export const getDataFromDB = async (requiredData, requiredKey = null, requiredValue = null) => {
  try {
    let res;
    switch (requiredData) {
      case 'users':
        if (!!requiredKey && !!requiredValue) {
          res = await fetch(`http://localhost:3000/users?${requiredKey}=${requiredValue}`);
          break;
        } else {
          res = await fetch('http://localhost:3000/users');
          break;
        }
      case 'novels':
        if (!!requiredKey && !!requiredValue) {
          res = await fetch(`http://localhost:3000/novels?${requiredKey}=${requiredValue}`);
          break;
        } else {
          res = await fetch('http://localhost:3000/novels');
          break;
        }
      case 'genres':
        if (!!requiredKey && !!requiredValue) {
          res = await fetch(`http://localhost:3000/genres?${requiredKey}=${requiredValue}`);
          break;
        } else {
          res = await fetch('http://localhost:3000/genres');
          break;
        }
      case '':
        console.log('Error! There should be no empty value');
        break;
      default:
        console.log('Error! There are no matches in the database.');
        break;
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

// export const getDataFromDBById = async (requiredData, requiredId) => {
//   try {
//     let res;
//     switch (requiredData) {
//       case 'users':
//         res = await fetch(`http://localhost:3000/users/${requiredId}`);
//         break;

//       case 'novels':
//         res = await fetch(`http://localhost:3000/novels/${requiredId}`);
//         break;
//       case '':
//         console.log('Error! There should be no empty value');
//         break;
//       default:
//         console.log('Error! There are no matches in the database.');
//         break;
//     }
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };
