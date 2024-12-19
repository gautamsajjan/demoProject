
// const { initializeKhaltiPayment, verifyKhaltiPayment } = require("../middleware/khalti");
// const Payment = require("../models/payment");
// const PurchasedItem = require("../models/purchasedItem");

// const initiateKhaltiPayment = async (req, res) => {
//   try {
//     const { itemId, totalPrice, website_url } = req.body;

//     const itemData = await Item.findOne({
//       _id: itemId,
//       price: Number(totalPrice),
//     });

//     if (!itemData) {
//       return res.status(400).send({
//         success: false,
//         message: "Item not found or price mismatch",
//       });
//     }

//     const purchasedItemData = await PurchasedItem.create({
//       item: itemId,
//       paymentMethod: "khalti",
//       totalPrice: totalPrice * 100,
//     });

//     const paymentInitiate = await initializeKhaltiPayment({
//       amount: totalPrice * 100,
//       purchase_order_id: purchasedItemData._id,
//       purchase_order_name: itemData.name,
//       return_url: `${process.env.BACKEND_URI}/complete-khalti-payment`,
//       website_url,
//     });

//     res.json({
//       success: true,
//       purchasedItemData,
//       payment: paymentInitiate,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message,
//     });
//   }
// };

// const completeKhaltiPayment = async (req, res) => {
//   const {
//     pidx,
//     txnId,
//     amount,
//     mobile,
//     purchase_order_id,
//     purchase_order_name,
//     transaction_id,
//   } = req.query;

//   try {
//     const paymentInfo = await verifyKhaltiPayment(pidx);

//     if (
//       paymentInfo?.status !== "Completed" ||
//       paymentInfo.transaction_id !== transaction_id ||
//       Number(paymentInfo.total_amount) !== Number(amount)
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Incomplete information",
//         paymentInfo,
//       });
//     }

//     const purchasedItemData = await PurchasedItem.findOne({
//       _id: purchase_order_id,
//       totalPrice: amount,
//     });

//     if (!purchasedItemData) {
//       return res.status(400).send({
//         success: false,
//         message: "Purchased data not found",
//       });
//     }

//     await PurchasedItem.findByIdAndUpdate(purchase_order_id, {
//       $set: { status: "completed" },
//     });

//     const paymentData = await Payment.create({
//       pidx,
//       transactionId: transaction_id,
//       productId: purchase_order_id,
//       amount,
//       dataFromVerificationReq: paymentInfo,
//       apiQueryFromUser: req.query,
//       paymentGateway: "khalti",
//       status: "success",
//     });

//     res.json({
//       success: true,
//       message: "Payment Successful",
//       paymentData,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "An error occurred",
//       error: error.message,
//     });
//   }
// };

// module.exports = { initiateKhaltiPayment, completeKhaltiPayment };

