import React, { useEffect, useState } from 'react'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
  Minus,
  Plus,
} from 'phosphor-react'
import {
  AddressFormContainer,
  PurchaseFormContainer,
  PaymentFormContainer,
  BaseInputText,
  FieldsContainer,
  OptionsPaymentContainer,
  SelectedCoffeeContainer,
  CardCoffee,
  ButtonsContainer,
  InputProduct,
  RemoveProduct,
  PriceProduct,
  ConfirmButton,
  ValueContainer,
  OptionPayment,
} from './styles'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import coffeeTradicional from './../../assets/coffee/coffeeTradicional.svg'
import coffeeCremoso from './../../assets/coffee/coffeeCremoso.svg'
import coffeeAmericano from './../../assets/coffee/coffeeAmericano.svg'

interface CartItemProps {
  id: number
  imgCoffee: string
  name: string
  price: number
  quantity: number
  totalPrice: number
}

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
  const [cart, setCart] = useState<CartItemProps[]>([
    {
      id: 1,
      imgCoffee: coffeeTradicional,
      name: 'Expresso Tradicional',
      price: 9.9,
      quantity: 1,
      totalPrice: 9.9,
    },
    {
      id: 2,
      imgCoffee: coffeeAmericano,
      name: 'Expresso Americano',
      price: 6.9,
      quantity: 1,
      totalPrice: 6.9,
    },
    {
      id: 3,
      imgCoffee: coffeeCremoso,
      name: 'Expresso Cremoso',
      price: 12.9,
      quantity: 1,
      totalPrice: 12.9,
    },
  ])
  const [selectPayment, setSelectPayment] = useState<
    'cash' | 'debit' | 'credit' | ''
  >('')
  const [totalItem, setTotalItem] = useState(0)

  useEffect(() => {
    const totalValue = cart
      .reduce((accumulator, { totalPrice }) => accumulator + totalPrice, 0)
      .toFixed(2)

    setTotalItem(Number(totalValue))
  }, [cart])
  console.log(cart)
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

  const { register, handleSubmit, watch, reset } = newPurchaseForm

  const watchAllFields = watch()
  const { rua, cidade, numero, bairro, uf, cep } = watchAllFields

  const isDisableSubmit =
    !rua || !cidade || !numero || !bairro || !uf || !cep || !selectPayment

  function handlePlusQuantityCoffee(
    event: React.MouseEvent<HTMLButtonElement>,
    quantity: number,
    id: number,
  ) {
    event.preventDefault()

    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity + 1,
          totalPrice: Number(((quantity + 1) * item.price).toFixed(2)),
        }
      }

      return item
    })

    setCart(newCart)
  }

  function handleMinusQuantityCoffee(
    event: React.MouseEvent<HTMLButtonElement>,
    quantity: number,
    id: number,
  ) {
    event.preventDefault()

    const newCart = cart.map((item) => {
      if (item.id === id && quantity > 1) {
        return {
          ...item,
          quantity: quantity - 1,
          totalPrice: Number(((quantity - 1) * item.price).toFixed(2)),
        }
      }

      return item
    })

    setCart(newCart)
  }

  function handleRemoveItemFromCart(
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) {
    event.preventDefault()

    const newCart = cart.filter((item) => {
      return item.id !== id
    })

    setCart(newCart)
  }

  function handleSelectPayment(
    event: React.MouseEvent<HTMLButtonElement>,
    type: 'cash' | 'debit' | 'credit',
  ) {
    event.preventDefault()

    if (type !== selectPayment) {
      setSelectPayment(type)
    }
  }

  function handleCreateNewPurchase(data: PurcharseFormData) {
    reset()
  }

  const isCredit = selectPayment === 'credit'
  const isDebit = selectPayment === 'debit'
  const isCash = selectPayment === 'cash'

  const deliveryTax = 3.5

  return (
    <PurchaseFormContainer onSubmit={handleSubmit(handleCreateNewPurchase)}>
      <section>
        <h2>Complete seu pedido</h2>

        <AddressFormContainer>
          <div className="headerForm">
            <MapPinLine />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <FormProvider {...newPurchaseForm}>
            <FieldsContainer>
              <BaseInputText
                placeholder="CEP"
                width={'200px'}
                {...register('cep')}
              />
              <BaseInputText
                placeholder="Rua"
                width={'560px'}
                {...register('rua')}
              />
              <div className="customerInput">
                <BaseInputText
                  placeholder="Número"
                  width={'200px'}
                  {...register('numero')}
                />
                <div className="optionalInput">
                  <BaseInputText
                    placeholder="Complemento"
                    width={'368px'}
                    {...register('complemento')}
                  />
                  <span>Opcional</span>
                </div>
              </div>
              <div className="customerInput">
                <BaseInputText
                  placeholder="Bairro"
                  width={'200px'}
                  {...register('bairro')}
                />
                <BaseInputText
                  placeholder="Cidade"
                  width={'276px'}
                  {...register('cidade')}
                />
                <BaseInputText
                  placeholder="UF"
                  width={'60px'}
                  {...register('uf')}
                />
              </div>
            </FieldsContainer>
          </FormProvider>
        </AddressFormContainer>

        <PaymentFormContainer>
          <div className="headerForm">
            <CurrencyDollar />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <OptionsPaymentContainer>
            <OptionPayment
              onClick={(event) => handleSelectPayment(event, 'credit')}
              isSelected={isCredit}
            >
              <CreditCard className="icon" />
              CARTÃO DE CRÉDITO
            </OptionPayment>
            <OptionPayment
              onClick={(event) => handleSelectPayment(event, 'debit')}
              isSelected={isDebit}
            >
              <Bank className="icon" />
              CARTÃO DE DÉBITO
            </OptionPayment>
            <OptionPayment
              onClick={(event) => handleSelectPayment(event, 'cash')}
              isSelected={isCash}
            >
              <Money className="icon" />
              DINHEIRO
            </OptionPayment>
          </OptionsPaymentContainer>
        </PaymentFormContainer>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <SelectedCoffeeContainer>
          {cart.map((item) => {
            return (
              <CardCoffee key={item.id}>
                <img src={item.imgCoffee} alt="" />

                <div className="info">
                  <h4>{item.name}</h4>

                  <ButtonsContainer>
                    <InputProduct>
                      <button
                        className="icon"
                        onClick={(event) =>
                          handleMinusQuantityCoffee(
                            event,
                            item.quantity,
                            item.id,
                          )
                        }
                      >
                        <Minus />
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className="icon"
                        onClick={(event) =>
                          handlePlusQuantityCoffee(
                            event,
                            item.quantity,
                            item.id,
                          )
                        }
                      >
                        <Plus />
                      </button>
                    </InputProduct>
                    <RemoveProduct>
                      <button
                        className="icon"
                        onClick={(event) =>
                          handleRemoveItemFromCart(event, item.id)
                        }
                      >
                        <Trash />
                        <p>REMOVER</p>
                      </button>
                    </RemoveProduct>
                  </ButtonsContainer>
                </div>

                <PriceProduct>R${item.totalPrice}</PriceProduct>
              </CardCoffee>
            )
          })}

          <ValueContainer>
            <p>Total de itens</p>
            <p>R$ {totalItem}</p>
          </ValueContainer>
          <ValueContainer>
            <p>Entrega</p>
            <p>R$ {deliveryTax}</p>
          </ValueContainer>
          <ValueContainer>
            <p>
              <strong>Total</strong>
            </p>
            <p>
              <strong>R$ {deliveryTax + totalItem}</strong>
            </p>
          </ValueContainer>
          <ConfirmButton type="submit" disabled={isDisableSubmit}>
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </SelectedCoffeeContainer>
      </section>
    </PurchaseFormContainer>
  )
}
