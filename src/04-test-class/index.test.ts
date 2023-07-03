// Uncomment the code below and write your tests
import {
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', () => {
  const initialBalance = 3000;

  const account = getBankAccount(initialBalance);
  const toAccount = getBankAccount(1000);

  test('should create account with initial balance', () => {
    // Write your test here
    expect(getBankAccount(initialBalance).getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    expect(() => account.withdraw(5000)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    expect(() => account.transfer(5000, toAccount)).toThrow(Error);
    expect(() => account.transfer(5000, toAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    expect(() => account.transfer(5000, account)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    // Write your test here
    expect(account.deposit(5000).getBalance()).toBe(8000);
  });

  test('should withdraw money', () => {
    // Write your test here
    expect(account.withdraw(2000).getBalance()).toBe(6000);
  });

  test('should transfer money', () => {
    // Write your test here
    account.transfer(2000, toAccount);
    expect(account.getBalance()).toBe(4000);
    expect(toAccount.getBalance()).toBe(3000);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const fetchedBalance = await account.fetchBalance();
    if (fetchedBalance !== null) {
      expect(typeof fetchedBalance).toBe('number');
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const newBalance = 2000;
    jest.spyOn(account, 'fetchBalance').mockResolvedValueOnce(newBalance);
    await account.synchronizeBalance();
    const myBalance = account.getBalance();
    expect(myBalance).toBe(newBalance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    jest.spyOn(account, 'fetchBalance').mockResolvedValueOnce(null);
    await expect(() => account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
