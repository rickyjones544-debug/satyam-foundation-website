# 📧 Email Configuration Setup Guide

## 🎯 Current Status
Your contact form is updated to send real emails! Now you need to configure Formspree to receive emails at **natasharoy.collabs@gmail.com**

## 📋 Step-by-Step Setup

### Step 1: Create Formspree Account
1. Go to **https://formspree.io**
2. Click **"Sign Up"**
3. Sign up with your email: **natasharoy.collabs@gmail.com**
4. Verify your email address

### Step 2: Create New Form
1. After logging in, click **"New Form"**
2. Enter form details:
   - **Form name:** Satyam Mushroom Contact
   - **Email for notifications:** natasharoy.collabs@gmail.com
3. Click **"Create Form"**

### Step 3: Get Your Form ID
1. After creating the form, you'll see a form URL like:
   `https://formspree.io/f/yourformid`
2. Copy the **form ID** (the part after `/f/`)

### Step 4: Update Website Code
1. Open file: `pages/contact.js`
2. Find line 31:
   ```javascript
   const response = await fetch('https://formspree.io/f/xyzyzyzy', {
   ```
3. Replace `xyzyzyzy` with your actual form ID
4. Save the file

### Step 5: Test the Form
1. Deploy your updated website
2. Go to the contact page
3. Fill out the form with test information
4. Submit the form
5. Check your email: **natasharoy.collabs@gmail.com**

## 🔧 What Happens Next?

### When Someone Submits the Form:
✅ You'll receive an email at **natasharoy.collabs@gmail.com**  
✅ Email includes: Name, Email, Phone, Subject, Message  
✅ User sees success message on the website  
✅ Form data is stored in your Formspree dashboard  

### Features You Get:
- 📱 **Instant email notifications**
- 📊 **Form submission dashboard**
- 🛡️ **Spam protection**
- 📈 **Submission analytics**
- 💾 **Backup of all submissions**

## 🎉 Benefits
- **No server required** - Formspree handles everything
- **Free plan** includes 50 submissions/month
- **Professional appearance** 
- **Mobile friendly** submissions
- **Instant delivery** to your email

## 📞 Alternative Options
If you prefer other services:
- **EmailJS** - More customization
- **Getform** - Similar to Formspree
- **Netlify Forms** - If using Netlify hosting

## ⚡ Quick Setup Summary
1. Sign up at formspree.io with natasharoy.collabs@gmail.com
2. Create new form
3. Copy form ID
4. Update contact.js with your form ID
5. Test and deploy!

---

**🍄 Once configured, customers can contact you directly through your website!**
