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

        // основной объект
        const object = clothesObj[productId]

        return ({
          id: productId,
          image: object.link || null,
          name: object.title,
          info: `${object.brand[0]} ${object.size} ${object.color}`,
          price: object.price,
          quantity: entity.quantity,
          cost: object.price * entity.quantity
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
    remove(productId) {
      if (!this.idCart[productId]) {
        return
      }
      this.idCart[productId] -= 1
      this.countInCart--
      if (this.idCart[productId].quantity === 0) {
        delete this.idCart[productId]
      }
    },
    removeProduct(productId) {
      this.idCart[productId] -= 1
      this.countInCart-=this.idCart[productId].quantity
        delete this.idCart[productId]
    }
  },
})