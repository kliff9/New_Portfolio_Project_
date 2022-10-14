import emailjs from 'emailjs-com'

const submit = (name, email, subject, message) => {
    if(name && email && message) {
        const serviceId = 'service_qqazqeh'
        const templateId = 'template_ognz5r9'
        const publicKey = 'gQyg32O4gPusI_XY8'
        const templateParams = {
            name,
            email,
            subject,
            message
        }

        return emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(response => console.log("Success!", response.status, response.text))
            .then(error => console.log("Failed...", error))
    }

    return alert('Please fill in all of the fields')
}

export default submit
