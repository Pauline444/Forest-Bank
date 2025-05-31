import { useState } from 'react';
import '../Styles/LoanForm.css';


function LoanForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        age: '',
        isEmployed: false,
        income: '',
        loanAmount: '',
        loanPurpose: '',
        repaymentYears: '',
        comments: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Namn krävs';
        if (!formData.phone.trim()) newErrors.phone = 'Telefonnummer krävs';
        if (!formData.email.trim()) newErrors.email = 'E-post krävs';
        if (!formData.age.trim()) newErrors.age = 'Ålder krävs';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Ansökan skickad:', formData);
            alert('Ansökan skickad!');
            setErrors({});

            setFormData({
                name: '',
                phone: '',
                email: '',
                age: '',
                isEmployed: false,
                income: '',
                loanAmount: '',
                loanPurpose: '',
                repaymentYears: '',
                comments: ''
            });
        }
    };

    return (
        <div>
            <header className='header'>
                <h1>Forest Bank</h1>
            </header>
            <main className='main'>
                <form className='loan-form' onSubmit={handleSubmit}>
                    <h2>Forest Bank - Låneansökan</h2>

                    <label>
                        Namn:
                        {errors.name && <span className='error'>{errors.name}</span>}
                        <input className='input-area' type='text' name='name' value={formData.name} onChange={handleChange} />
                    </label>

                    <label>
                        Telefonnummer:
                        {errors.phone && <span className='error'>{errors.phone}</span>}
                        <input className='input-area' type='text' name='phone' value={formData.phone} onChange={handleChange} />
                    </label>

                    <label>
                        E-post:
                        {errors.email && <span className='error'>{errors.email}</span>}
                        <input className='input-area' type='text' name='email' value={formData.email} onChange={handleChange} />
                    </label>

                    <label>
                        Ålder:
                        {errors.age && <span className='error'>{errors.age}</span>}
                        <input className='input-area' type='date' name='age' value={formData.age} onChange={handleChange} />
                    </label>

                    <label className='checkbox-label'>
                        Jag är anställd
                        <input className='checkbox' type='checkbox' name='isEmployed' checked={formData.isEmployed} onChange={handleChange} />
                    </label>

                    <label>
                        Lön:
                        <select name='income' value={formData.income} onChange={handleChange}>
                            <option value=''>-- Välj --</option>
                            <option value='under10000'>Mindre än 10000 kr</option>
                            <option value='10000-25000'>10000 - 25000 kr</option>
                            <option value='25000-40000'>25000 - 40000 kr</option>
                            <option value='over40000'> Över 40000 kr</option>
                        </select>
                    </label>

                    <label>
                        Lånebelopp:
                        <input className='input-area' type='number' name='loanAmount' value={formData.loanAmount} onChange={handleChange} />
                    </label>

                    <label>
                        Syfte med lånet:
                        <input className='input-area' type='text' name='loanPurpose' value={formData.loanPurpose} onChange={handleChange} />
                    </label>

                    <label>
                        Återbetalningstid i år:
                        <input className='input-area' type='number' name='repaymentYears' value={formData.repaymentYears} onChange={handleChange} />
                    </label>

                    <label>
                        Kommentarer:
                        <textarea className='input-area' typre='text' name='comments' value={formData.comments} onChange={handleChange} />
                    </label>

                    <button type='submit'>Send</button>
                </form>
            </main>
            <footer>
                <div className='footer-p'>
                    <p><strong>© 2025 Forest Bank.</strong> Vi växer tillsammans med dina drömmar.<br />
                        Kontakta oss: info@forestbank.se | 08-123 45 67</p>
                </div>
                <div className="credit">
                    Foto av <a href="https://www.pexels.com/@veeterzy/" target="_blank" rel="noopener noreferrer">vee terzy</a>
                </div>
            </footer>
        </div>
    );
}

export default LoanForm;