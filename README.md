# ProductManagementConsole


Task: Build a small product catalog web app.


It should have the following screens:


Product Create/Edit

Product List

Product Detail


Requirements:


A Product has the following attributes:


Name (required)

SKU (alphanumeric, required)

Description (optional)

Brand (optional)

Image URL (optional)


Product Create/Edit Screen


Contains a form for adding new products or updating existing products.

Form has validation for required fields.

Upon submit, navigates to the Product List Screen.


Product List Screen

<ul>
<li> Lists known Product with columns Name/SKU/Description/Brand </li>

<li> Description is truncated if longer than 40 characters</li>

<ul>Supports the following navigation & actions:</ul>

<li> When selected by clicking, reveals a summary of the Product (including its image) in an adjacent pane to the right of the Product list</li>

<li> Add New Product (links to Product Create/Edit Screen)</li>
</ul>
</ul>
Product Detail Screen


Shows Product fields (read-only)

If URL is present, displays the Product image.

Supports the following navigation and actions:

Link to Product List

Delete this Product

Edit this Product (link to Create/Edit Screen)
