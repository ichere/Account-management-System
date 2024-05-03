export type FaqData = {
    id: number;
    question: string;
    answer: string;
  };
  export const faqData: FaqData[] = [
    {
      id: 1,
      question: 'How do I print a receipt for my purchase?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, in! Veritatis, fugit nesciunt? Blanditiis, delectus? Molestiae eaque rem aperiam blanditiis beatae, sunt  facere nobis laborum optio. ',
    },
    {
      id: 2,
      question: 'How can I verify successful payment?',
      answer:
        'After making a purchase on the Book-kepper app, you should see an order confirmation on the order page. This typically includes details of your order, such as items purchased, quantities, prices, shipping address, and payment method. Book-kepper will send you an order confirmation email immediately after you complete a purchase. Check your email inbox (including spam or promotions folders) for this confirmation email. If you paid with a credit/debit card, check your card statement for the transaction. It may take a short while for the charge to appear, but once it does, it is a clear sign that the payment went through.',
    },
    {
      id: 3,
      question: 'How do I make a payment or pay my bills?',
      answer:
        'Browse the app and select the products or services you want to purchase by clicking on the "Add to Cart". Once you have added items to your cart, click on the shopping cart icon  to review the items you have selected. From the cart page, click on the "Proceed to Checkout"  to initiate the payment process. Enter the shipping address and any necessary contact details. Make sure the shipping information is accurate. Select your preferred payment method and enter the payment details accordingly. Review the order summary, including the items, quantities, prices, and any applicable shipping fee. Click the "Confirm Payment" button to finalize the transaction. Once the payment is successfully processed, you will receive an order confirmation on your  “Orders Page” with an order number and details of the purchase. You will also receive an email confirming your order, including order details, shipping information, and estimated pickup dates or pickup place.',
    },
    {
      id: 4,
      question: 'How do I create an account as a merchant on this Book-kepper?',
      answer:
        'To create a merchant account, visit our website and navigate to the Get Started button. Follow the prompts to provide your sign-up information. Once you click register, your account will be reviewed and approved.',
    },
    {
      id: 5,
      question: 'How can I add products to my online app?',
      answer:
        'After logging into your merchant account, go to the "Products" section. Click on "Add Product" and enter details such as product name, description, images, pricing, and stock availability. Make sure to categorize and add proper collection tags to your products for easy search and navigation.',
    },
    {
      id: 6,
      question: 'What payment methods can I offer to customers?',
      answer:
        'Book-kepper app supports various payment methods, including credit/debit cards, mobile wallets, and bank transfers. You can set up your preferred payment gateways in the "Merchant Settings" section of your merchant dashboard.',
    },
    {
      id: 7,
      question: 'How do I manage orders and track shipments?',
      answer:
        'Orders placed by customers will appear in the "Orders" section of your dashboard. You can review order details, process payments, update order status, and provide tracking information.',
    },
    {
      id: 8,
      question: 'Can I offer discounts or promotions for my products?',
      answer:
        'Yes, you can create discount codes or promotional campaigns for your products. In the "Promotions" section(work in progress), you can set up percentage or fixed amount discounts, free shipping, or bundle deals to attract more customers.',
    },
    {
      id: 9,
      question: 'How do I handle returns and refunds?',
      answer:
        'If a customer requests a return or refund, you can manage this through the "Returns" section(work in progress). Follow the outlined process to approve or deny returns based on your app policies. The app will guide you through the necessary steps for issuing refunds.',
    },
    {
      id: 10,
      question: 'How do I access sales and performance reports for my app?',
      answer:
        'Your overview dashboard provides comprehensive sales and performance reports. Track metrics such as revenue, best-selling products, and customer demographics to make informed business decisions.',
    },
    {
      id: 11,
      question: 'How can I update my app information?',
      answer:
        'You can edit your app information under the "Settings" to "Business Settings" section of your dashboard. Make sure to keep your business information up to date for accurate customer communication.',
    },
  ];
  