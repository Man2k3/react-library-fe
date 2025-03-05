import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
const stripePromise = loadStripe('pk_test_51Qrz7vRaulxdhCiOY6Iq11XHdFvkQu2SnHY1FRzkDzjV3GqxNv4Ocadlc1RA7OTY3I27R2j8wSjBe2LAh84dbKPf00LWZkIXTo');
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>,
)
