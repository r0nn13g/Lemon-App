\c tasty_waste;

INSERT INTO customers (Fname, Lname, username, password, phoneNum) VALUES
('Admin', 'Admin', 'Admin', '1234567', '0000000000'),
('ronnie', 'garcia', 'rgarcia', '1234567', '0000000000');

INSERT INTO carts (customer_id, is_active) VALUES
(1, true),
(2, true);


INSERT INTO restaurants (name, cuisine_type, restaurant_sprites, addy, lat, lon) VALUES
('Sweet Greens', 'Healthy', 'https://i.imgur.com/17aH1nU.jpeg', '2905 Broadway, Queens, NY 11106', 40.762628, -73.926692),
('Dig Inn', 'Healthy', 'https://i.imgur.com/dEfCSik.jpg', '32-90 36th St, Astoria, NY 11106', 40.75818, -73.92334 ),
('Taco Tumba', 'Taqueria','https://i.imgur.com/lnZAR8U.png', '30-10 Steinway St, Queens, NY 11103', 40.76381, -73.91531 ),
('Amylos Taverna','Greek','https://i.imgur.com/OvHcCmI.png', '3319 Broadway, Queens, NY 11106', 40.76123, -73.92277 ),
('Belaire Diner', 'Greek and American Cuisine','https://i.imgur.com/DzDL9tx.png', '31-91 21st St, Queens, NY 11106', 40.76536, -73.93127 ),
('Saffron', 'Indian Cuisine','https://i.imgur.com/drheRmp.png', '44-04 Broadway, Queens, NY 11103', 40.75762, -73.91567 ),
('Cerasella', 'Pastry shop','https://i.imgur.com/acPnH7V.png', '36-27 31st St, Queens, NY 11106', 40.75648, -73.93009 ),
('Zabars', 'Cafe / Healthy', 'https://i.imgur.com/Rfxjgvg.png', '2245 Broadway, New York, NY 10024', 40.7849024, -73.97966685 ),
('Murrays Bagels', 'Baked Goods','https://i.imgur.com/8cfUePK.png', '500 6th Ave New York, NY 10011', 40.7447814, -73.9985854 ),
('Sweet Green', 'Salads & fresh vegetables','https://i.imgur.com/17aH1nU.jpeg', '8 E 18th St, New York, NY 10003', 40.73805135, -73.9912353351445 ),
('Dig Inn', 'Balanced Vegetable based dishes','https://i.imgur.com/LPBupbt.png', '2254 Broadway, New York, NY 10024', 40.78485, -73.97955 ),
('Mias Brooklyn Bakery', 'Baked Goods / Coffee Bar with Savory items','https://i.imgur.com/zOrQFbG.png', '139 Smith St, Brooklyn, NY 11201', 40.687061, -73.990199 ),
('Rizzos Pizza', 'Pizzeria', 'https://i.imgur.com/66vWUjo.png', '313 Steinway Street, New York, NY 11103', 40.76339, -73.915261 ),
('Marthas Country Bakery', 'Bakery','https://i.imgur.com/1dOGoKS.png', '36-21 Ditmars Boulevard New York, NY 11105', 40.774026, -73.90746 ),
('Sandros Latin Food', 'Latin Cuisine', 'https://i.imgur.com/qVjDlCt.png', '27-03 23rd Avenue New York, NY 11105', 40.776012, -73.915003 ),
('Kelloggs Diner', 'Diner','https://i.imgur.com/lYEEjcw.png', '518 Metropolitan Avenue New York, NY 11211', 40.713768, -73.951777 ),
('To B Thai', 'Thai Cuisine', 'https://i.imgur.com/Rh1OgoN.png', '126 Beverly Road New York, NY 11218', 40.642694, -73.978363 ),
('Ess-a-bagel', 'Bagel Shop', 'https://i.imgur.com/69leRj9.png', '831 3rd Ave New York, NY 10022', 40.756177, -73.970296 ),
('Vida Verde', 'Mexican Cuisine','https://i.imgur.com/uDpvPOk.png', '248 West 55th Street, New York, NY 10019', 40.764938, -73.983038 ),
('The Halal Guys', 'Halal Food', 'https://i.imgur.com/BJZAwr8.png', '1301 6th Ave New York, NY 10019', 40.761727, -73.979707 );


INSERT INTO products (restaurant_id, name, description, portion, calories, quantity_in_stock ) VALUES
(1, 'Sweet Greens','Vibrant Greens with Quinoa', '8oz', 280, 7),
(1, 'Sweet Greens','Pita Chips', '10oz', 231, 9),
(1, 'Sweet Greens','Wild Rice with a side of steamed vegetables', '10oz', 170, 10),
(1, 'Sweet Greens','Salad with roasted chicken', '12oz', 280, 2),
(2, 'Dig Inn','Pre Packaged balanced meal kit', '12oz', 280, 22),
(2, 'Dig Inn','Pre Packaged balanced meal kit', '12oz', 280, 35),
(2, 'Dig Inn','Pre Packaged balanced meal kit', '12oz', 280, 3),
(2, 'Dig Inn','Pre Packaged balanced meal kit', '12oz', 280, 1),
(3, 'Taco Tumba','Pre Packaged balanced meal kit', '12oz', 280, 2),
(3, 'Taco Tumba','Pre Packaged balanced meal kit', '12oz', 280, 40),
(3, 'Taco Tumba','Pre Packaged balanced meal kit', '12oz', 280, 6),
(3, 'Taco Tumba','Pre Packaged balanced meal kit', '12oz', 280,2),
(4, 'Amylos Taverna','Pre Packaged balanced meal kit', '12oz', 280, 15),
(4, 'Amylose Taverna','Pre Packaged balanced meal kit', '12oz', 280, 21),
(5, 'Belaire Diner','Pre Packaged balanced meal kit', '12oz', 280, 36),
(5, 'Belaire Diner','Pre Packaged balanced meal kit', '12oz', 280, 1),
(6, 'Saffron','Vegan pre Packaged balanced meal kit', '12oz', 280, 15),
(7, 'Cerasella','Pre Packaged balanced meal kit', '12oz', 280, 21),
(8, 'Zabars','Pre Packaged balanced meal kit', '12oz', 280, 36),
(8, 'Zabars','Pre Packaged balanced meal kit', '12oz', 280, 1),
(9, 'Murrays Bagels','Pre Packaged balanced meal kit', '12oz', 280, 15),
(9, 'Murrays Bagels','Pre Packaged balanced meal kit', '12oz', 280, 21),
(10, 'Sweet Green','Pre Packaged balanced meal kit', '12oz', 280, 36),
(10, 'Sweet Green','Pre Packaged balanced meal kit', '12oz', 280, 1),
(11, 'Dig Inn','Pre Packaged balanced meal kit', '12oz', 280, 15),
(11, 'Dig Inn','Pre Packaged balanced meal kit', '12oz', 280, 21),
(12, 'Mias Brooklyn Bakery','Pre Packaged balanced meal kit', '12oz', 280, 36),
(12, 'Mias Brooklyn Bakery','Pre Packaged balanced meal kit', '12oz', 280, 1),
(13, 'Rizzos Pizza','Pre Packaged balanced meal kit', '12oz', 280, 22),
(13, 'Rizzos Pizza','Pre Packaged balanced meal kit', '12oz', 280, 35),
(13, 'Rizzos Pizza','Pre Packaged balanced meal kit', '12oz', 280, 3),
(14, 'Marthas Country Bakery','Pre Packaged balanced meal kit', '12oz', 280, 22),
(14, 'Marthas country Bakery','Pre Packaged balanced meal kit', '12oz', 280, 35),
(14, 'Non-dairy','Pre Packaged balanced meal kit', '12oz', 280, 3),
(15, 'Sandros Latin Food','Pre Packaged balanced meal kit', '12oz', 280, 35),
(15, 'Sandros Latin Food','Pre Packaged balanced meal kit', '12oz', 280, 3),
(16, 'Kellogs Diner','Pre Packaged balanced meal kit', '12oz', 280, 22),
(16, 'Kellogs Diner','Pre Packaged balanced meal kit', '12oz', 280, 35),
(17, 'To B Thai','Pre Packaged balanced meal kit', '12oz', 280, 22),
(17, 'To B Thai','Pre Packaged balanced meal kit', '12oz', 280, 35),
(18, 'Ess-a-Bagel','Pre Packaged balanced meal kit', '12oz', 280, 22),
(18, 'Ess-a-Bagel','Pre Packaged balanced meal kit', '12oz', 280, 35),
(18, 'Ess-a-Bagel','Pre Packaged balanced meal kit', '12oz', 280, 3),
(19, '7th Street Burger','Pre Packaged balanced meal kit', '12oz', 280, 35),
(19, '7th Street Burger','Pre Packaged balanced meal kit', '12oz', 280, 3),
(20, 'The Halal Guys','Pre Packaged balanced meal kit', '12oz', 280, 1);

INSERT INTO order_details (carts_id, products_id, quantity) VALUES
(1, 1, 1),
(2, 21, 3);