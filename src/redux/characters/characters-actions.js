// ----- with Redax Toolkit ------
import { createAction } from "@reduxjs/toolkit";

// під капотом createAction створює і повертає об'єкт
// action = { type: 'action/type, payload: 'data }

const changeFilter = createAction("characters/changeFilter");

export default changeFilter;

// // ----- with Vanila Redux----

// // changeFilter - цe функція,яка отримує payload,
// // і повертає об'єкт action = { type: 'action/type, payload: 'data }

// const changeFilter = (value) => ({
//   type: "characters/changeFilter",
//   payload: value,
// });

// export default changeFilter;
