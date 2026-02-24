import {render,screen} from '@testing-library/react'
import { describe,test,expect } from 'vitest'
import { MemoryRouter } from "react-router-dom";
import Search from '../components/header/Search'

describe('Header Search',() => {
    test("renders or not search input"),() => {
        render(
            <MemoryRouter>
        <Search />
      </MemoryRouter>
        );
        const input =screen.getByRole('searchbox');
        expect(input).toBeInTheDocument();
    }
})
