
# A website to order and track pizza orders

#### 17th June,2019

#### By George Schiedel

## Description

A website to order and track pizza orders. Users should be able to order more than one pizza, only get prompted to enter an address if they are ordering any one of their pizzas for delivery, navigate _somewhat_ intuitively between address submission, checkout, and the order form.

### Specifications

|Behavior|Input|Output|
|:---:|:---:|:---:|
|User selects a topping|User selects topping|Topping selection returned|
|Users selects more than one topping|User selects more than one topping|More than one topping returned|
|Selected toppings are unique|User selects n toppings|n|
|User selects size of the pizza|User selects large|Large returned|
|Price of pizza is calculated based on size of pizza and number of toppings. Toppings beyond the first are slightly cheaper than the first topping|User selects small pizza with three toppings|$11.60|
|Meat toppings cost slightly more than veggie toppings|User selects small pizza with three meat toppings|$12.80|
|Users can order more than one pizza|User selects more than one pizza|Second (or more) pizza purchases tracked|
|Costs for more than one pizza are added to price of first pizza|User orders more than one pizza|Cumulative price returned|
|User selects a delivery option|Delivery selected|Delivery option returned|
|Cost of delivery is added to price of the pizza|Delivery selected|New cumulative price reported|

## Setup/Installation Requirements

* This repository is meant to be viewed here (https://github.com/Charlessciedel/Pizza-order/edit/gh-pages/README.md)

### Or if you're feeling bold, you can clone OR download a local instance of the site:

* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at 
  * Clone this track survey repository by typing, `git clone https://github.com/Atticus29/pizzaOrder.git`
* Download
  * Click [here] to download the repo
  * Unzip the zipped repository
* Open the pizzaOrder folder and double-click on index.html.
* Make your selections and click submit as instructed on the site.


## Known Bugs

There is currently no way to remove orders, and sometimes the only way to get to checkout again is to go through the order page again, thereby forcing you to buy a new pizza. Ran out of time to correct this.

## Support and contact details



## Technologies Used


* html5
* bootstrap v. 3.3.7
* CSS
* javaScript
* jQuery v. 3.1.1

### License

This software is licensed under the MIT license.

Copyright (c) 2018 George Charles

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
