import { useContext } from 'react'
import TestContext from '../context/TestContext';

const useTestContext = () => {
    const context = useContext(TestContext);

  if(context === undefined) {
    throw new Error('Erro de contexto. Tente novamente!')
  }

  return context;
}

export default useTestContext;