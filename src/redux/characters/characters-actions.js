// action = { type: 'action/type, payload: 'data }

import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction("characters/changeFilter");

export default changeFilter;
