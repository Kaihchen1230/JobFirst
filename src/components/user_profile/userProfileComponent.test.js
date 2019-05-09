import React from 'react'
import { render } from 'react-testing-library'
import Sidebar from './Sidebar'
import ResumeUploader from './resumeUploader'
import UploadPage from './photoUploader'
import General from './general'
import Experiences from './experiences'
import Education from './education'
import Information from './content'
import BasicInfoForm from './basicInfoForm'
import AppliedJob from './appliedJob'


// all the component should be rendered properly
describe('Sidebar Component', () => {
    it('renders the Sidebar', () => {
        const { getByTestId } = render(<Sidebar />)
        const card = getByTestId('card-contain-user-info')
        //console.log(card)
        expect(card.innerHTML).toBe('Comment Feed')
    })
})

describe('Information Component', () => {
    it('renders the Information component', () => {
        const { getByTestId } = render(<Information />)
        const container = getByTestId('div-information')
        console.log(container)
        expect(card.innerHTML).toBe('Comment Feed')
    })
})