using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace FlatlandersAPI.Migrations
{
    public partial class reduxtagram : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Image_Products_ProductID",
                table: "Image");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Image",
                table: "Image");

            migrationBuilder.RenameTable(
                name: "Image",
                newName: "Images");

            migrationBuilder.RenameColumn(
                name: "Stars",
                table: "Reviews",
                newName: "stars");

            migrationBuilder.RenameColumn(
                name: "CreatedOn",
                table: "Reviews",
                newName: "createdOn");

            migrationBuilder.RenameColumn(
                name: "Body",
                table: "Reviews",
                newName: "body");

            migrationBuilder.RenameColumn(
                name: "Author",
                table: "Reviews",
                newName: "author");

            migrationBuilder.RenameColumn(
                name: "Shine",
                table: "Products",
                newName: "shine");

            migrationBuilder.RenameColumn(
                name: "Rarity",
                table: "Products",
                newName: "rarity");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Products",
                newName: "price");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Products",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Faces",
                table: "Products",
                newName: "faces");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Products",
                newName: "description");

            migrationBuilder.RenameColumn(
                name: "Color",
                table: "Products",
                newName: "color");

            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "Images",
                newName: "imageUrl");

            migrationBuilder.RenameIndex(
                name: "IX_Image_ProductID",
                table: "Images",
                newName: "IX_Images_ProductID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Images",
                table: "Images",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    caption = table.Column<string>(nullable: true),
                    code = table.Column<string>(nullable: true),
                    display_src = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Notes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CategoryId = table.Column<int>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Notes_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Coments",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    postid = table.Column<int>(nullable: true),
                    text = table.Column<string>(nullable: true),
                    user = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coments", x => x.id);
                    table.ForeignKey(
                        name: "FK_Coments_Posts_postid",
                        column: x => x.postid,
                        principalTable: "Posts",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Coments_postid",
                table: "Coments",
                column: "postid");

            migrationBuilder.CreateIndex(
                name: "IX_Notes_CategoryId",
                table: "Notes",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Products_ProductID",
                table: "Images",
                column: "ProductID",
                principalTable: "Products",
                principalColumn: "ProductID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_Products_ProductID",
                table: "Images");

            migrationBuilder.DropTable(
                name: "Coments");

            migrationBuilder.DropTable(
                name: "Notes");

            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Images",
                table: "Images");

            migrationBuilder.RenameTable(
                name: "Images",
                newName: "Image");

            migrationBuilder.RenameColumn(
                name: "stars",
                table: "Reviews",
                newName: "Stars");

            migrationBuilder.RenameColumn(
                name: "createdOn",
                table: "Reviews",
                newName: "CreatedOn");

            migrationBuilder.RenameColumn(
                name: "body",
                table: "Reviews",
                newName: "Body");

            migrationBuilder.RenameColumn(
                name: "author",
                table: "Reviews",
                newName: "Author");

            migrationBuilder.RenameColumn(
                name: "shine",
                table: "Products",
                newName: "Shine");

            migrationBuilder.RenameColumn(
                name: "rarity",
                table: "Products",
                newName: "Rarity");

            migrationBuilder.RenameColumn(
                name: "price",
                table: "Products",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Products",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "faces",
                table: "Products",
                newName: "Faces");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "Products",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "color",
                table: "Products",
                newName: "Color");

            migrationBuilder.RenameColumn(
                name: "imageUrl",
                table: "Image",
                newName: "ImageUrl");

            migrationBuilder.RenameIndex(
                name: "IX_Images_ProductID",
                table: "Image",
                newName: "IX_Image_ProductID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Image",
                table: "Image",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Image_Products_ProductID",
                table: "Image",
                column: "ProductID",
                principalTable: "Products",
                principalColumn: "ProductID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
