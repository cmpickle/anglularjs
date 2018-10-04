﻿// <auto-generated />
using FlatlandersAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace FlatlandersAPI.Migrations
{
    [DbContext(typeof(MyDbContext))]
    [Migration("20180628150434_reduxtagram")]
    partial class reduxtagram
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FlatlandersAPI.Models.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("FlatlandersAPI.Models.Image", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ProductID");

                    b.Property<string>("imageUrl");

                    b.HasKey("Id");

                    b.HasIndex("ProductID");

                    b.ToTable("Images");
                });

            modelBuilder.Entity("FlatlandersAPI.Models.Note", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CategoryId");

                    b.Property<string>("Description");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Notes");
                });

            modelBuilder.Entity("FlatlandersAPI.Models.Product", b =>
                {
                    b.Property<string>("ProductID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("color");

                    b.Property<string>("description");

                    b.Property<int>("faces");

                    b.Property<string>("name");

                    b.Property<decimal>("price");

                    b.Property<int>("rarity");

                    b.Property<int>("shine");

                    b.HasKey("ProductID");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("FlatlandersAPI.Models.reduxtagram.Comments", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("postid");

                    b.Property<string>("text");

                    b.Property<string>("user");

                    b.HasKey("id");

                    b.HasIndex("postid");

                    b.ToTable("Coments");
                });

            modelBuilder.Entity("FlatlandersAPI.Models.reduxtagram.Posts", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("caption");

                    b.Property<string>("code");

                    b.Property<string>("display_src");

                    b.HasKey("id");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("FlatlandersAPI.Models.Review", b =>
                {
                    b.Property<int>("ReviewID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ProductID");

                    b.Property<string>("author");

                    b.Property<string>("body");

                    b.Property<string>("createdOn");

                    b.Property<int>("stars");

                    b.HasKey("ReviewID");

                    b.HasIndex("ProductID");

                    b.ToTable("Reviews");
                });

            modelBuilder.Entity("FlatlandersAPI.Models.Image", b =>
                {
                    b.HasOne("FlatlandersAPI.Models.Product", "product")
                        .WithMany("images")
                        .HasForeignKey("ProductID");
                });

            modelBuilder.Entity("FlatlandersAPI.Models.Note", b =>
                {
                    b.HasOne("FlatlandersAPI.Models.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId");
                });

            modelBuilder.Entity("FlatlandersAPI.Models.reduxtagram.Comments", b =>
                {
                    b.HasOne("FlatlandersAPI.Models.reduxtagram.Posts", "post")
                        .WithMany("Comments")
                        .HasForeignKey("postid");
                });

            modelBuilder.Entity("FlatlandersAPI.Models.Review", b =>
                {
                    b.HasOne("FlatlandersAPI.Models.Product", "product")
                        .WithMany("reviews")
                        .HasForeignKey("ProductID");
                });
#pragma warning restore 612, 618
        }
    }
}