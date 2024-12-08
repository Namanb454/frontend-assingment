'ise client'

import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        staticField1: '',
        staticField2: '',
        dynamicFields: [{ label: '', value: '' }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDynamicFieldChange = (index, e) => {
        const { name, value } = e.target;
        const newDynamicFields = [...formData.dynamicFields];
        newDynamicFields[index][name] = value;
        setFormData(prev => ({
            ...prev,
            dynamicFields: newDynamicFields
        }));
    };

    const addDynamicField = () => {
        setFormData(prev => ({
            ...prev,
            dynamicFields: [...prev.dynamicFields, { label: '', value: '' }]
        }));
    };

    const removeDynamicField = (index) => {
        const newDynamicFields = formData.dynamicFields.filter((_, i) => i !== index);
        setFormData(prev => ({
            ...prev,
            dynamicFields: newDynamicFields
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Dynamic Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="staticField1" className="block text-sm font-medium text-gray-700 mb-1">Static Field 1</label>
                    <input
                        type="text"
                        id="staticField1"
                        name="staticField1"
                        value={formData.staticField1}
                        onChange={handleChange}
                        placeholder="Enter static field 1"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="staticField2" className="block text-sm font-medium text-gray-700 mb-1">Static Field 2</label>
                    <input
                        type="text"
                        id="staticField2"
                        name="staticField2"
                        value={formData.staticField2}
                        onChange={handleChange}
                        placeholder="Enter static field 2"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium text-gray-700">Dynamic Fields</label>
                        <button
                            type="button"
                            onClick={addDynamicField}
                            className="px-3 py-1 bg-gray-900 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                            Add Field
                        </button>
                    </div>

                    {formData.dynamicFields.map((field, index) => (
                        <div key={index} className="flex space-x-2 mb-2">
                            <div className="flex-1">
                                <label className="block text-xs text-gray-700 mb-1">Label</label>
                                <input
                                    type="text"
                                    name="label"
                                    value={field.label}
                                    onChange={(e) => handleDynamicFieldChange(index, e)}
                                    placeholder="Enter label"
                                    className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-xs text-gray-700 mb-1">Value</label>
                                <input
                                    type="text"
                                    name="value"
                                    value={field.value}
                                    onChange={(e) => handleDynamicFieldChange(index, e)}
                                    placeholder="Enter value"
                                    className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0c0eff]"
                                />
                            </div>
                            {formData.dynamicFields.length > 1 && (
                                <div className="flex items-end">
                                    <button
                                        type="button"
                                        onClick={() => removeDynamicField(index)}
                                        className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-600 transition-colors"
                                    >
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;