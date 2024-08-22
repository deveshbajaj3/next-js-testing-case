import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Counter from '@/app/counter/page'
import user from '@testing-library/user-event'
 
describe('Counter', () => {
  it('Should be render', () => {
    render(<Counter />)
    const counterElement = screen.getByText(/Counter page/i);
    expect(counterElement).toBeInTheDocument()
  })

  it('Should be initial value', () => {
    render(<Counter />)
    const counterElement = screen.getByTitle('count-value');
    expect(counterElement).toHaveTextContent("0")
  })

  it('Should be 1 after click increment', async () => {
    user.setup()
    render(<Counter />)
    const incrementBtn = screen.getByRole('button', {
      name: 'Increment'
    });
    await user.click(incrementBtn)
    const counterElement = screen.getByTitle('count-value');
    expect(counterElement).toHaveTextContent("1")
  })

  it('Should be 1 after click decrement', async () => {
    user.setup()
    render(<Counter />)
    const decrementBtn = screen.getByRole('button', {
      name: 'Decrement'
    });
    await user.click(decrementBtn)
    const counterElement = screen.getByTitle('count-value');
    expect(counterElement).toHaveTextContent("-1")
  })
})