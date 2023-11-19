import { Formik, Field, Form } from 'formik';
import { FilterContainer } from './Filter.styled';

export const Filter = ({ inputValue, handleChange }) => {
    return (
        <FilterContainer>
            <p>Find contacts by name</p>
            <Formik
                initialValues={{
                    search: '',
                }}
                onSubmit={(values, actions) => {
                    console.log(values);
                }}
            >
                <Form>
                    <div className='container'>
                        <label htmlFor="search">Name</label>
                        <Field
                            id="seacrh"
                            name="search"
                            placeholder="Name Surname"
                            value={inputValue}
                            onChange={handleChange}
                        />
                    </div>
                </Form>
            </Formik>
        </FilterContainer>
    );
};
