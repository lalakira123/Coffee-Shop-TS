import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 5.75rem 0;
`

export const IntroduceShopContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 29.75rem;
  gap: 3.5rem;
`

export const IntroduceTitle = styled.div`
  height: 12rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 4rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`

export const IntroduceTags = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2.5rem;

  margin-top: 4rem;
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    color: ${(props) => props.theme.background};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const TagCart = styled(Tag)`
  div {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const TagPackage = styled(Tag)`
  div {
    background-color: ${(props) => props.theme['base-text']};
  }
`

export const TagTimer = styled(Tag)`
  div {
    background-color: ${(props) => props.theme.yellow};
  }
`

export const TagCoffee = styled(Tag)`
  div {
    background-color: ${(props) => props.theme.purple};
  }
`
