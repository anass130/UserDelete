const name = "anass"
export default{
  //  userListQuery : `
  //  SELECT USER_ID , USERNAME , FULL_NAME , EMAIL , USER_TYPE_CODE, ACTIVE ,
  //   USER_TYPE_CODE , USER_TYPE_NAME, CREATED_BY  , CREATED_ON FROM shipping.app_user,`;
  userListQuery : `
   SELECT USER_ID , USERNAME , FULL_NAME , EMAIL , USER_TYPE_CODE,full_name, ACTIVE ,
   CREATED_BY  , CREATED_ON FROM shipping.app_user
   `,

  queryText : `
    DELETE FROM shipping.app_user
    WHERE username='${name}'
    `
  
   
}
