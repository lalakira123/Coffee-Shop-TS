import { MapPinLine } from 'phosphor-react'
import { AddressFormContainer, BaseInputText, FieldsContainer } from './styles'

import { useFormContext } from 'react-hook-form'

export function FormAddress() {
  const { register } = useFormContext()

  return (
    <AddressFormContainer>
      <div className="headerForm">
        <MapPinLine />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>

      <FieldsContainer>
        <BaseInputText placeholder="CEP" width={'200px'} {...register('cep')} />
        <BaseInputText placeholder="Rua" width={'560px'} {...register('rua')} />
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
          <BaseInputText placeholder="UF" width={'60px'} {...register('uf')} />
        </div>
      </FieldsContainer>
    </AddressFormContainer>
  )
}
