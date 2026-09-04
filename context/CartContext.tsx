'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Product } from '@/lib/products'

export type CartItem = {
  product: Product
  quantity: number
}

export type ShippingAddress = {
  fullName: string
  phone: string
  email?: string
  addressLine: string
  landmark?: string
  city: string
  state: string
  pincode: string
}

type CartContextType = {
  items: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (slug: string) => void
  updateQuantity: (slug: string, quantity: number) => void
  clearCart: () => void
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  totalCount: number
  subtotal: number
  shippingFee: number
  totalAmount: number
  savedAddress: ShippingAddress | null
  saveAddress: (address: ShippingAddress) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'maa_tarini_cart'
const ADDRESS_STORAGE_KEY = 'maa_tarini_shipping_address'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [savedAddress, setSavedAddress] = useState<ShippingAddress | null>(null)
  const [hasHydrated, setHasHydrated] = useState(false)

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (storedCart) {
        setItems(JSON.parse(storedCart))
      }
      const storedAddress = localStorage.getItem(ADDRESS_STORAGE_KEY)
      if (storedAddress) {
        setSavedAddress(JSON.parse(storedAddress))
      }
    } catch (e) {
      console.error('Failed to load cart/address from storage:', e)
    } finally {
      setHasHydrated(true)
    }
  }, [])

  // Sync cart to localStorage
  useEffect(() => {
    if (!hasHydrated) return
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    } catch (e) {
      console.error('Failed to save cart to storage:', e)
    }
  }, [items, hasHydrated])

  const addToCart = (product: Product, quantity: number = 1) => {
    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.slug === product.slug)
      if (existing) {
        return prevItems.map((item) =>
          item.product.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prevItems, { product, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (slug: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.product.slug !== slug))
  }

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(slug)
      return
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.slug === slug ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
    try {
      localStorage.removeItem(CART_STORAGE_KEY)
    } catch (e) {
      console.error(e)
    }
  }

  const saveAddress = (address: ShippingAddress) => {
    setSavedAddress(address)
    try {
      localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(address))
    } catch (e) {
      console.error('Failed to save address to storage:', e)
    }
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((prev) => !prev)

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shippingFee = 0 // Free Shipping across India
  const totalAmount = subtotal + shippingFee

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        totalCount,
        subtotal,
        shippingFee,
        totalAmount,
        savedAddress,
        saveAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
