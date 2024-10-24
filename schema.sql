/*clients*/
CREATE TABLE clients (
    id integer PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    form_message TEXT(1000) NOT NULL,
    created DATE NOT NULL DEFAULt(CURRENT_DATE)
);

/*admin*/
CREATE TABLE admin (
    id integer PRIMARY KEY AUTO_INCREMENT,
    username varchar(50) NOT NULL,
    password_adm varchar(255) NOT NULL
);