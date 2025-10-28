import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../../api/axios";

export default function RegisterPage() {

    //state variables
    const [name, setName] = useState('');
    const [industry, setIndustry] = useState('');
    const [description, setDescription] = useState('');
    const [organizationSize, setOrganizationSize] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerPassword, setOwnerPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [warnings, setWarnings] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    //function to validate fields using AI
    const validateAI = async () => {
        try {
            const res = await api.post("/ai/validate", {
                fields: {
                    organizationName: name,
                    description,
                    industry,
                    organizationSize,
                    ownerName,
                    ownerEmail,
                    ownerPassword,
                }
            });

            const corrected = res.data?.data?.correctedFields || {};
            const warningsList = res.data?.data?.warnings || [];

            const statusObj = {};

            // Auto-corrected fields
            statusObj.organizationName = corrected.organizationName && corrected.organizationName !== name ? "corrected" : "valid";
            statusObj.description = corrected.description && corrected.description !== description ? "corrected" : "valid";
            statusObj.industry = corrected.industry && corrected.industry !== industry ? "corrected" : "valid";
            statusObj.organizationSize = corrected.organizationSize && corrected.organizationSize !== organizationSize ? "corrected" : "valid";
            statusObj.ownerName = corrected.ownerName && corrected.ownerName !== ownerName ? "corrected" : "valid";
            statusObj.ownerEmail = corrected.ownerEmail && corrected.ownerEmail !== ownerEmail ? "corrected" : "valid";
            statusObj.ownerPassword = corrected.ownerPassword && corrected.ownerPassword !== ownerPassword ? "corrected" : "valid";

            // Apply corrected values
            setName(corrected.organizationName || name);
            setDescription(corrected.description || description);
            setIndustry(corrected.industry || industry);
            setOrganizationSize(corrected.organizationSize || organizationSize);
            setOwnerName(corrected.ownerName || ownerName);
            setOwnerEmail(corrected.ownerEmail || ownerEmail);
            setOwnerPassword(corrected.ownerPassword || ownerPassword);

            setWarnings(statusObj);

            return { statusObj, correctedFields: corrected };


        } catch (error) {
            console.error("AI validation failed", error);
            toast.error("AI validation failed");
            return {};
        }
    }

    // Get border class based on status
    const getBorderClass = (status) => {
        if (status === "valid") return "border-green-500 focus:ring-green-400";
        if (status === "corrected") return "border-orange-500 focus:ring-orange-400";
        if (status === "invalid") return "border-red-500 focus:ring-red-400";
        return "border-gray-300 focus:ring-blue-500";
    };


    //handle submit for organization registration
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setWarnings({});
        toast.loading("Validation with AI...");


        // Call AI validation and get warnings
        const warningResult = await validateAI();
        toast.dismiss();

        // if AI validation fails
        if (!warningResult) {
            toast.error("AI validation failed. Please try again.");
            setLoading(false);
            return;
        }

        const { statusObj, correctedFields } = warningResult;

        // stop registration
        const hasInvalid = warningResult && Object.keys(warningResult).some(
            (key) => warningResult[key] === "invalid"
        );

        if (hasInvalid) {
            toast.error("Please fix highlighted errors before submitting");
            setLoading(false);
            return;
        }

        const finalName = warningResult.correctedFields.organizationName || name;
        const finalIndustry = warningResult.correctedFields.industry || industry;
        const finalOrgSize = warningResult.correctedFields.organizationSize || organizationSize;
        const finalDescription = warningResult.correctedFields.description || description;
        const finalOwnerName = warningResult.correctedFields.ownerName || ownerName;
        const finalOwnerEmail = warningResult.correctedFields.ownerEmail || ownerEmail;
        const finalOwnerPassword = warningResult.correctedFields.ownerPassword || ownerPassword;


        //validation for making all fields required
        if (!finalName || !finalIndustry || !finalOrgSize || !finalOwnerName || !finalOwnerEmail || !finalOwnerPassword || !phoneNumber) {
            toast.error("All fields are required");
            return;
        }

        // Update state so UI shows corrected values
        setName(finalName);
        setIndustry(finalIndustry);
        setOrganizationSize(finalOrgSize);
        setDescription(finalDescription);
        setOwnerName(finalOwnerName);
        setOwnerEmail(finalOwnerEmail);
        setOwnerPassword(finalOwnerPassword);

        api.post("/organizations/register", {
            name: finalName,
            industry: finalIndustry,
            organizationSize: finalOrgSize,
            description: finalDescription,
            ownerName: finalOwnerName,
            ownerEmail: finalOwnerEmail,
            ownerPassword: finalOwnerPassword,
            phoneNumber: phoneNumber

        }).then((res) => {
            toast.success("Registration successful! Please wait until an admin approves");
            navigate("/login");

        }).catch((err) => {
            toast.error("Something went wrong");
        })

    };

    return (
        <div
            className="min-h-screen bg-cover bg-center py-12 px-4"
            style={{
                backgroundImage:
                    "url('')",
            }}
        >
            <div className="max-w-5xl mx-auto">


                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Join Our Platform</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Register your organization to access powerful multi-tenant solutions designed for modern businesses
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">


                    {/* Registration Form */}
                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Organization Registration</h2>
                        <p className="text-gray-600 mb-6">
                            Fill out the form below to get started with your organization account
                        </p>

                        <form onSubmit={handleOnSubmit} className="space-y-6">


                            {/* Organization Details */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800">Organization Details</h3>

                                <input
                                    type="text"
                                    placeholder="Organization Name *"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${getBorderClass(warnings.organizationName)}`}
                                />

                                <select
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                    className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${getBorderClass(warnings.industry)}`}
                                >
                                    <option value="">Select Industry *</option>
                                    <option>Technology</option>
                                    <option>Healthcare</option>
                                    <option>Finance</option>
                                    <option>Education</option>
                                    <option>Retail</option>
                                    <option>Other</option>
                                </select>

                                <select
                                    value={organizationSize}
                                    onChange={(e) => setOrganizationSize(e.target.value)}
                                    className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${getBorderClass(warnings.organizationSize)}`}
                                >
                                    <option value="">Select Organization Size *</option>
                                    <option>1-10</option>
                                    <option>11-50</option>
                                    <option>51-200</option>
                                    <option>201-1000</option>
                                    <option>1000+</option>
                                </select>

                                <textarea
                                    rows={3}
                                    placeholder="Organization Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${getBorderClass(warnings.description)}`}
                                />
                            </div>

                            {/* Primary Contact */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800">Primary Contact</h3>

                                <input
                                    type="text"
                                    placeholder="Full Name *"
                                    value={ownerName}
                                    onChange={(e) => setOwnerName(e.target.value)}
                                    className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${getBorderClass(warnings.ownerName)}`}
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    value={ownerEmail}
                                    onChange={(e) => setOwnerEmail(e.target.value)}
                                    className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${getBorderClass(warnings.ownerEmail)}`}
                                />

                                <input
                                    type="tel"
                                    placeholder="(+94) Phone Number *"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${getBorderClass(warnings.phoneNumber)}`}
                                />

                                <input
                                    type="password"
                                    placeholder="Password *"
                                    value={ownerPassword}
                                    onChange={(e) => setOwnerPassword(e.target.value)}
                                    className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:outline-none ${getBorderClass(warnings.ownerPassword)}`}
                                />
                            </div>


                            {/* Terms */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" className="mt-1" />
                                    <span className="text-sm text-gray-700">
                                        I agree to the <a href="#" className="text-blue-600">Terms of Service</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" className="mt-1" />
                                    <span className="text-sm text-gray-700">Subscribe to product updates</span>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition">
                                Create Organization Account
                            </button>
                        </form>
                    </div>


                    {/* Benefits Section */}
                    <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-blue-700 mb-4">Why Choose Our Platform?</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>✅ Multi-Tenant Architecture – scalable for all sizes</li>
                                <li>✅ Enterprise Security – SOC 2, encryption</li>
                                <li>✅ 24/7 Support – dedicated assistance</li>
                                <li>✅ Easy Integration – APIs & webhooks</li>
                            </ul>
                        </div>

                        <div className="bg-white shadow rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get Started in Minutes</h3>
                            <ol className="space-y-3 text-gray-700">
                                <li>1️⃣ Complete the registration form</li>
                                <li>2️⃣ Verify your email address</li>
                                <li>3️⃣ Set up your organization workspace</li>
                                <li>4️⃣ Start inviting team members</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
