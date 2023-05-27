import { defineStore } from 'pinia'
import clothes from '../data'
import { arrObjToObjObj } from '../helper'

const clothesObj = arrObjToObjObj(clothes)

export const useCartStore = defineStore('cart', {
  state: () => ({
    idsCart: {}, // {id: {quantity:$int}, }
    countInCart: 0, // $int
    theme: 'dark',
    fullCart: []
  }),
  getters: {
    infoCart() {
      // возвращаем полную информацию о товаре
      return Object.keys(this.idsCart).map(productId => {
        const entity = this.idsCart[productId] // из айди создаем объект

        const object = clothesObj[productId] // основной объект
        // debugger
        return (this.fullCart = {
          id: productId,
          image: object.img || null,
          name: object.title,
          info: `${object.brand[0]} ${object.size} ${object.color}`,
          price: object.price,
          quantity: entity.quantity,
          cost: object.price * entity.quantity
        })
      })
    },
    countInCartGetter() {
      return Object.values(this.idsCart).reduce((acc, { quantity }) => acc + quantity, 0)
    },
    sum() {
      return Object.values(this.idsCart).map((quantity, price) => price * quantity)
    },
    total() {
      return Object.values(this.infoCart).reduce((acc, { cost }) =>{
        console.log(Object.values(this.infoCart))
        return acc + cost
      }, 0)
    }
  },
  actions: {
    add(productId) {
      if (this.idsCart.hasOwnProperty(productId)) {
        this.idsCart[productId].quantity++
      } else {
        this.idsCart[productId] = {
          quantity: 1
        }
      }
      this.countInCart++
      // debugger
    },
    plus(productId) {
      console.log(productId)
      this.idsCart[productId].quantity++
      this.countInCart++
      console.log(this.idsCart[productId])
    },
    minus(productId) {
      if (!this.idsCart[productId]) {
        return
      }
      this.idsCart[productId].quantity--
      this.countInCart--
      if (this.idsCart[productId].quantity === 0) {
        delete this.idsCart[productId]
      }
    },
    remove(productId) {
      this.countInCart -= this.idsCart[productId].quantity
      this.idsCart[productId]--
      delete this.idsCart[productId]
    }
  },
})