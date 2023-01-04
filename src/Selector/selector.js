import { selector } from 'recoil'
import Atom from '../Atoms/atom'

const Selector = selector({
    key: 'Selector',
    get: ({ get }) => {
        const selectorValue = get(Atom)
        return selectorValue
    }
})

export default Selector