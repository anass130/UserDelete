CREATE OR REPLACE VIEW shipping.users
AS SELECT u.user_id,
    u.username,
    u.password,
    u.email,
    u.full_name,
    u.active,
    u.user_type_code,
    ut.user_type_name,
    u.created_by,
    u.created_on
   FROM app_user u
     JOIN user_type ut ON ut.user_type_code::text = u.user_type_code::text;
