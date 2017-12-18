-- COMP 66G added new row into users
insert into users ("first_name", "last_name") 
VALUES($1, $2) 
RETURNING *
