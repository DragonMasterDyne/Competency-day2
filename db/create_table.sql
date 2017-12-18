
-- COMP 67C Create table sql query

CREATE TABLE "public"."users" (
    "id" serial,
    "first_name" varchar(20),
    "last_name" varchar(20),
    PRIMARY KEY ("id")
);



INSERT INTO "public"."users"("first_name", "last_name") VALUES('Cody', 'Davis') RETURNING "id", "first_name", "last_name";
INSERT INTO "public"."users"("first_name", "last_name") VALUES('JIm-Bob', 'Joe') RETURNING "id", "first_name", "last_name";
INSERT INTO "public"."users"("first_name", "last_name") VALUES('Jeff', 'Jeff') RETURNING "id", "first_name", "last_name";
