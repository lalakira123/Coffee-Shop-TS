import { useNavigate } from 'react-router-dom'

import { PurchaseFormContainer } from './styles'

import { FormPayment } from './components/FormPayment'
import { FormAddress } from './components/FormAddress'
import { FormCart } from './components/FormCart'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { PurchaseContext } from '../../contexts/PurchaseContext'
import { CartContext } from '../../contexts/CartContext'
import { SelectPaymentContext } from '../../contexts/SelectPaymentContext'

const purchaseFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'Informe o Cep corretamente')
    .max(8, 'Informe o Cep corretamente'),
  rua: zod.string(),
  numero: zod.string(),
  complemento: zod.string().optional(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string().min(2).max(2),
})

type PurcharseFormData = zod.infer<typeof purchaseFormValidationSchema>

export function Purchase() {
  const { makePurchase } = useContext(PurchaseContext)
  const { cart } = useContext(CartContext)
  const { selectPayment } = useContext(SelectPaymentContext)

  const navigate = useNavigate()

  const newPurchaseForm = useForm<PurcharseFormData>({
    resolver: zodResolver(purchaseFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = newPurchaseForm

  function handleCreateNewPurchase(data: PurcharseFormData) {
    makePurchase(data, cart, selectPayment)
    reset()
    navigate('/purchase-made')
  }

  return (
    <FormProvider {...newPurchaseForm}>
      <PurchaseFormContainer onSubmit={handleSubmit(handleCreateNewPurchase)}>
        <section>
          <h2>Complete seu pedido</h2>

          <FormAddress />
          <FormPayment />
        </section>

        <section>
          <h2>Cafés selecionados</h2>

          <FormCart />
        </section>
      </PurchaseFormContainer>
    </FormProvider>
  )
}
