import React from 'react';
import './Accordian.css';

const Accordian = () => {
    return (
        <div className="accordian">
            <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <strong>Offer free shipping cost</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        In the US, 21% of small and medium-sized online retailers always offer free shipping. Free shipping is never truly “free,” as it means the shipping cost has shifted to you. <br /><br />

Depending on your margins, offering free shipping may or may not make sense, and you may need more information about your customers before you can confidently adopt this approach. Generally speaking, free shipping without conditions is best for high-margin products where you can account for shipping expenses in the overall price of your products.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
       <strong> Charge exact shipping costs. </strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        If free shipping isn’t in the cards, or isn’t an option for every shipment, charging your customers exactly what it’ll cost you to ship their order is a strategy that can empower them to choose the best fit for their needs. <br /> <br />

For example, a customer who needs an order to arrive before a specific date may be willing to pay $20 for expedited shipping, but a customer who’d rather save money and wait a few extra days might be more likely to convert if they can choose a $5 shipping option that will take a bit more time. <br /> <br />

Queen Majesty Hot Sauce employs this approach. Once a customer gets to the checkout, they select where they want their order shipped to, and the calculator does the rest.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
       <strong>Offer flat shipping rates</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        This flat-rate method of charging for shipping requires a bit of preparation to figure out your average cost of shipping a package. This is a best practice you should be doing anyway to make sure that you don’t drastically undercharge or overcharge your customers. <br /><br />
        

When you hit the right price for your flat rate shipping, you'll probably be over—or under—the actual shipping cost by a little, but it should balance out in the end. <br /><br />

One important point about the nature of flat rate shipping: find the flat rate that works for you. This will require some testing so you can determine if you need to do it by order totals or weight ranges, or something different.
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Accordian;