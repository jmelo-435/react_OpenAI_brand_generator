import openai
import os
import json

openai.api_key = os.environ["OPENAI_API_KEY"]

def generate_brand(business_info):
    if business_info["name"] !="":
        name=business_info["name"]
        acronym=_generate_brand_name(business_info)["acronym"]
    else:
        generated = _generate_brand_name(business_info)
        name = generated["name"]
        acronym=generated["acronym"]
    
    slogan =_generate_brand_slogan(business_info,name)["slogan"]
    color_scheme=_generate_brand_colors(business_info)["colors"]
    font = _generate_brand_font(business_info)["font"]
    return {"name":name,"slogan":slogan,"achronym":acronym,"color_scheme":color_scheme,"font":font}

def _generate_brand_name(business_info):
    def _generate_brand_name_prompt(business_info):
        def _separate_by_comas(list):
            separeted_string=""
            for word in list:
                separeted_string+=word+","
            return separeted_string

        business_type=business_info["type"]
        keywords = _separate_by_comas(business_info["keywords"])
        atributes = _separate_by_comas(business_info["atributes"])
        return f"""Sugest a name and an acronym for a business that is a {business_type} related to  {keywords}.The name must be  {atributes}. Return as a JSON string with name and acronym keys.Example:{{"name":"name"}}"""
    response = openai.Completion.create(
            model="text-davinci-003",
            prompt=_generate_brand_name_prompt(business_info),
            temperature=0.7,
            presence_penalty=1.5,
            max_tokens=400
        )
    return json.loads(response["choices"][0]["text"])

def _generate_brand_slogan(business_info,name):
    def _generate_brand_slogan_prompt(business_info):
        def _separate_by_comas(list):
            separeted_string=""
            for word in list:
                separeted_string+=word+","
            return separeted_string

        business_type=business_info["type"]
        keywords = _separate_by_comas(business_info["keywords"])
        atributes = _separate_by_comas(business_info["atributes"])
        return f"""Sugest a slogan for a business named{name} that is a {business_type} related to  {keywords}.The slogan must be  {atributes}.Return as a JSON string with the slogan key.Example:{{"name":"name"}}"""
    response = openai.Completion.create(
            model="text-davinci-003",
            prompt=_generate_brand_slogan_prompt(business_info),
            temperature=0.7,
            presence_penalty=1,
            max_tokens=400
        )
    return json.loads(response["choices"][0]["text"])

def _generate_brand_colors(business_info):
    def _generate_brand_colors_prompt(business_info):
        def _separate_by_comas(list):
            separeted_string=""
            for word in list:
                separeted_string+=word+","
            return separeted_string

        business_type=business_info["type"]
        keywords = _separate_by_comas(business_info["keywords"])
        atributes = _separate_by_comas(business_info["atributes"])
        return f"""Sugest a color scheme of 4 colors for a business that is a {business_type} related to  {keywords}.The color scheme must be  {atributes}.Return as a JSON string with colors hex.Example:{{"colors":["#fffff","#000000"]}}."""
    response = openai.Completion.create(
            model="text-davinci-003",
            prompt=_generate_brand_colors_prompt(business_info),
            temperature=0.7,
            max_tokens=400
        )
    return json.loads(response["choices"][0]["text"])

def _generate_brand_font(business_info):
    def _generate_brand_font_prompt(business_info):
        def _separate_by_comas(list):
            separeted_string=""
            for word in list:
                separeted_string+=word+","
            return separeted_string

        keywords = _separate_by_comas(business_info["keywords"])
        atributes = _separate_by_comas(business_info["atributes"])
        return f"""Sugest a Google Font for the logo of a business related to  {keywords}.The font must be  {atributes}.Return as a JSON string with the font name.Example:{{"font":"Arial"}}."""
    response = openai.Completion.create(
            model="text-davinci-003",
            prompt=_generate_brand_font_prompt(business_info),
            temperature=0.7,
            max_tokens=400
        )
    return json.loads(response["choices"][0]["text"])