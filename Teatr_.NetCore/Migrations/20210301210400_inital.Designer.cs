﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Teatr.Models;

namespace Teatr.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20210301210400_inital")]
    partial class inital
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.3")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DateHistonicHistonic", b =>
                {
                    b.Property<int>("DatesDateHistonicId")
                        .HasColumnType("int");

                    b.Property<int>("HistonicsHistonicId")
                        .HasColumnType("int");

                    b.HasKey("DatesDateHistonicId", "HistonicsHistonicId");

                    b.HasIndex("HistonicsHistonicId");

                    b.ToTable("DateHistonicHistonic");
                });

            modelBuilder.Entity("HistonicImage", b =>
                {
                    b.Property<int>("HistonicsHistonicId")
                        .HasColumnType("int");

                    b.Property<int>("ImagesImageId")
                        .HasColumnType("int");

                    b.HasKey("HistonicsHistonicId", "ImagesImageId");

                    b.HasIndex("ImagesImageId");

                    b.ToTable("HistonicImage");
                });

            modelBuilder.Entity("Teatr.Models.DateHistonic", b =>
                {
                    b.Property<int>("DateHistonicId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Time")
                        .HasColumnType("datetime2");

                    b.HasKey("DateHistonicId");

                    b.ToTable("Dates");

                    b.HasData(
                        new
                        {
                            DateHistonicId = 1,
                            Time = new DateTime(2021, 3, 1, 23, 3, 59, 538, DateTimeKind.Local).AddTicks(3772)
                        });
                });

            modelBuilder.Entity("Teatr.Models.Histonic", b =>
                {
                    b.Property<int>("HistonicId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Roles")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTimeOffset>("TimeDuration")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("UrlToTraller")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("HistonicId");

                    b.ToTable("Histonics");
                });

            modelBuilder.Entity("Teatr.Models.Image", b =>
                {
                    b.Property<int>("ImageId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Path")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UsedFor")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ImageId");

                    b.ToTable("Images");

                    b.HasData(
                        new
                        {
                            ImageId = 1,
                            Path = "Content/Image/1.png",
                            Title = "Test",
                            UsedFor = "Main"
                        },
                        new
                        {
                            ImageId = 2,
                            Path = "Content/Image/2.png",
                            Title = "Test",
                            UsedFor = "Main"
                        },
                        new
                        {
                            ImageId = 3,
                            Path = "Content/Image/3.png",
                            Title = "Test",
                            UsedFor = "Promotion"
                        },
                        new
                        {
                            ImageId = 4,
                            Path = "Content/Image/25.jpg",
                            Title = "Test",
                            UsedFor = "Promotion"
                        });
                });

            modelBuilder.Entity("DateHistonicHistonic", b =>
                {
                    b.HasOne("Teatr.Models.DateHistonic", null)
                        .WithMany()
                        .HasForeignKey("DatesDateHistonicId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Teatr.Models.Histonic", null)
                        .WithMany()
                        .HasForeignKey("HistonicsHistonicId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("HistonicImage", b =>
                {
                    b.HasOne("Teatr.Models.Histonic", null)
                        .WithMany()
                        .HasForeignKey("HistonicsHistonicId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Teatr.Models.Image", null)
                        .WithMany()
                        .HasForeignKey("ImagesImageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
