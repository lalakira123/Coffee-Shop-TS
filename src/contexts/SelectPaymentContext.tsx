import { createContext, ReactNode, useState, MouseEvent } from 'react'

interface SelectPaymentContextType {
  selectPayment: string
  changeSelectPayment: (
    event: MouseEvent<HTMLButtonElement>,
    type: 'cash' | 'debit' | 'credit',
  ) => void
}

export const SelectPaymentContext = createContext(
  {} as SelectPaymentContextType,
)

interface SelectPaymentContextProps {
  children: ReactNode
}

export function SelectPaymentContextProvider({
  children,
}: SelectPaymentContextProps) {
  const [selectPayment, setSelectPayment] = useState<
    'cash' | 'debit' | 'credit' | ''
  >('')

  function changeSelectPayment(
    event: MouseEvent<HTMLButtonElement>,
    type: 'cash' | 'debit' | 'credit',
  ) {
    event.preventDefault()

    if (type !== selectPayment) {
      setSelectPayment(type)
    }
  }

  return (
    <SelectPaymentContext.Provider
      value={{
        selectPayment,
        changeSelectPayment,
      }}
    >
      {children}
    </SelectPaymentContext.Provider>
  )
}
