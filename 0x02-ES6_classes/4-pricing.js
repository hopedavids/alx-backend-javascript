#!/usr/bin/node

import Currency from './3-currency.js';


export default class Pricing{
    constructor(amount, currency){
        if (typeof amount != 'number' || typeof currency != 'string'){
            throw new Error('Invalid input format');
        }

        this._amount = amount;
        this._currency = currency;
    }

    get amount(){
        return this._amount;
    }

    get currency(){
        return this._currency;
    }

    set amount(newAmount){
        if (typeof newAmount != 'number'){
            throw new Error('Invalid input format');
        }

        this._amount = newAmount;
    }

    set currency(newCurrency){
        if (typeof this.newCurrency != 'string'){
            throw new Error('Invalid input format');
        }
        this._currency = newCurrency;
    }

    displayFullPrice(){
        const currencyInstance = new Currency(this._amount, this._currency);
        return `${this._amount} ${currencyInstance.currency_name} (${currencyInstance.currency_code})`;
    }

    static convertPrice(amount, conversionRate){
        if (typeof amount != 'number' || typeof conversionRate != 'number'){
            throw new Error('Invalid input format');
        }
        return amount * conversionRate;

    }
}