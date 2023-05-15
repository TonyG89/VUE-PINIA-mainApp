import { defineStore } from 'pinia'
import clothes from '../data'
import { arrObjToObjObj } from '../helper'

const clothesObj = arrObjToObjObj(clothes)

export const useCartStore = defineStore('cart', {
  state: () => ({
    idCart: {},
    countInCart: 0,
    theme: 'light',
  }),
  getters: {
    infoCart() {
      return Object.keys(this.idCart).map(productId => {
        // из айди создаем объект

        const entity = this.idCart[productId]
        return ({
          id: productId,
          image: clothesObj[productId].img || null,
          name: clothesObj[productId].title,
          price: clothesObj[productId].price,
          quantity: entity.quantity,
          cost: clothesObj[productId].price * entity.quantity
        })
      })
    },
    total() {
      return '-1'
    }
  },
  actions: {
    add(productId) {
      if (this.idCart.hasOwnProperty(productId)) {
        this.idCart[productId] = {
          quantity: this.idCart[productId].quantity + 1
        }
      } else {
        this.idCart[productId] = {
          quantity: 1
        }
      }

      this.countInCart++
      // debugger
    },

  },
})