import emailjs from 'emailjs-com'

<<<<<<< HEAD
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
=======
const submit = (name, email, message) => {
    if(name && email && message) {
        const serviceId = 'service_jcjqat4'
        const templateId = 'template_bbtdllj'
        const userId = 'user_9q7DlrkhVKyOQX0hE4im9'
        const templateParams = {
            name,
            email,
            message
        }

        return emailjs.send(serviceId, templateId, templateParams, userId)
>>>>>>> 9e5932f (first commit)
            .then(response => console.log("Success!", response.status, response.text))
            .then(error => console.log("Failed...", error))
    }

    return alert('Please fill in all of the fields')
}

<<<<<<< HEAD
export default submit
=======
export default submit
>>>>>>> 9e5932f (first commit)
