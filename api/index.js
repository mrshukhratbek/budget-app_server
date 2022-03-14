const { Router, json } = require('express');
const accountController = require('./controllers/account');
const authController = require('./controllers/auth');
const categoryController = require('./controllers/category');
const income = require('./controllers/income');
const outcome = require('./controllers/outcome');
const attachment = require('./controllers/attachment');

const router = Router({
  mergeParams: true
});

router.use(json());

// account
router.post('/account', accountController.createAccount);
router.post('/account-recover-password/:id', accountController.recoverPasswor);
router.get('/account/:id', accountController.getAccountById);
router.get('/account-total-balance', accountController.getAccountById);
router.put('/account/:id', accountController.updateAccountById);
router.delete('/account/:id', accountController.deleteAccountById);

// auth
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/logout', authController.logout);

// category
router.post('/category', categoryController.createCategory);
router.get('/category', categoryController.updateCategory);
router.delete('/category', categoryController.deleteCategory);

// income
router.post('/income', income.addIncome);
router.get('/income', income.getIncome);
router.put('/income/:id', income.updateIncome);
router.delete('/income/:id', income.deleteIncome);

// outcome
router.post('/outcome', outcome.addOutcome);
router.get('/outcome', outcome.getOutcome);
router.put('/outcome/:id', outcome.updateOutcome);
router.delete('/outcome/:id', outcome.deleteIncome);

// attachment
router.post('/attachment', attachment.addAttachment);
router.delete('/attachment', attachment.deleteAttachment);

module.exports = router;
