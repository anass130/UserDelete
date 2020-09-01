CREATE TABLE shipping.app_user (
	user_id serial NOT NULL,
	username varchar(100) NOT NULL,
	"password" varchar(100) NOT NULL,
	email varchar(355) NOT NULL,
	created_on timestamp NULL,
	created_by varchar(100) NULL,
	user_type_code varchar(10) NOT NULL,
	full_name varchar(500) NOT NULL,
	active int2 NULL DEFAULT 1,
	CONSTRAINT user_email_key UNIQUE (email),
	CONSTRAINT user_pkey PRIMARY KEY (user_id),
	CONSTRAINT user_username_key UNIQUE (username)
);

CREATE TABLE shipping.app_group (
	group_id serial NOT NULL,
	group_name varchar(100) NOT NULL,
	CONSTRAINT group_group_name_key UNIQUE (group_name),
	CONSTRAINT group_pkey PRIMARY KEY (group_id)
);

CREATE TABLE shipping.app_role (
	role_id serial NOT NULL,
	role_name varchar(100) NOT NULL,
	CONSTRAINT role_pkey PRIMARY KEY (role_id),
	CONSTRAINT role_role_name_key UNIQUE (role_name)
);

CREATE TABLE shipping.user_group (
	user_group_id serial NOT NULL,
	user_id int4 NULL,
	group_id int4 NULL,
	CONSTRAINT user_group_pkey PRIMARY KEY (user_group_id)
);

CREATE TABLE shipping.group_role (
	group_role_id serial NOT NULL,
	group_id int4 NULL,
  role_id int4 NULL,
	CONSTRAINT group_role_pkey PRIMARY KEY (group_role_id)
);

CREATE TABLE shipping.user_type (
	user_type_id serial NOT NULL,
	user_type_name varchar(500) NOT NULL,
	user_type_code varchar(10) NOT NULL,
	CONSTRAINT user_type_pkey PRIMARY KEY (user_type_id)
);


