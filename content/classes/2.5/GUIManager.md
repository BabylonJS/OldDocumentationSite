---
TAGS:
---
## Description

class [GUIManager](/classes/2.0/GUIManager)



## Members

### static stylesByUIElement : StringDictionary&lt;StringDictionary&lt;[UIElementStyle](/classes/2.0/UIElementStyle)&gt;&gt;



### static DefaultStyleName : string



### static renderingTemplatesByUIElement : StringDictionary&lt;StringDictionary&lt;() =&gt; [UIElementRenderingTemplateBase](/classes/2.0/UIElementRenderingTemplateBase)&gt;&gt;



### static DefaultTemplateName : string



## Methods

### static registerDataTemplate(className, factory) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | className | string | 
 | factory | (parent: [UIElement](/classes/2.0/UIElement), dataObject: any) =&gt; [UIElement](/classes/2.0/UIElement) | 
### static getStyle(uiElType, styleName) &rarr; [UIElementStyle](/classes/2.0/UIElementStyle)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uiElType | string | 
 | styleName | string | 
### static registerStyle(uiElType, templateName, style) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uiElType | string | 
 | templateName | string | 
 | style | [UIElementStyle](/classes/2.0/UIElementStyle) | 
### static getRenderingTemplate(uiElType, templateName) &rarr; () =&gt; [UIElementRenderingTemplateBase](/classes/2.0/UIElementRenderingTemplateBase)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uiElType | string | 
 | templateName | string | 
### static registerRenderingTemplate(uiElType, templateName, factory) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uiElType | string | 
 | templateName | string | 
 | factory | () =&gt; [UIElementRenderingTemplateBase](/classes/2.0/UIElementRenderingTemplateBase) | 
