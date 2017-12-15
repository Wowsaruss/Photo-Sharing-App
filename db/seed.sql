create table users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(150),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(150),
    password VARCHAR(150),
    date_of_birth DATE,
    profile_image TEXT,
    user_status VARCHAR(150),
    about_me VARCHAR(500),
    hometown VARCHAR(50),
    country VARCHAR(50),
    website VARCHAR(200),
    date_joined DATE
);

insert into users
(username, first_name, last_name, email, password, date_of_birth, profile_image, user_status, about_me, hometown, country, website, date_joined)
values
('wowsaruss', 'Russell', 'Hayes', 'russell.hayes.dev@gmail.com', 'froggeez1', '2017-12-15', 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/18251619_1915370245415340_713217402975813632_a.jpg', 'Im coding', 'lora ipsum', 'Waddell, AZ', 'USA', 'http://www.russell-hayes.com', '2017-12-15');