﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Teatr.Models;

namespace Teatr.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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
                            Time = new DateTime(2021, 3, 12, 10, 59, 44, 882, DateTimeKind.Local).AddTicks(4570)
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

                    b.Property<int?>("PreviewId")
                        .HasColumnType("int");

                    b.Property<string>("Roles")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTimeOffset?>("TimeDuration")
                        .HasColumnType("datetimeoffset");

                    b.Property<int?>("TypeId")
                        .HasColumnType("int");

                    b.Property<string>("UrlToTraller")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("HistonicId");

                    b.HasIndex("PreviewId");

                    b.HasIndex("TypeId");

                    b.ToTable("Histonics");

                    b.HasData(
                        new
                        {
                            HistonicId = 1,
                            Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id odio sed quam ultricies vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
                            Name = "Test",
                            PreviewId = 5
                        });
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
                        },
                        new
                        {
                            ImageId = 5,
                            Path = "Content/Image/zavtra.jpg",
                            Title = "Test",
                            UsedFor = "Histonic"
                        });
                });

            modelBuilder.Entity("Teatr.Models.TypeHistonic", b =>
                {
                    b.Property<int>("TypeHistonicId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TypeHistonicId");

                    b.ToTable("TypeHistonics");

                    b.HasData(
                        new
                        {
                            TypeHistonicId = 1,
                            Name = "Большая сцена"
                        },
                        new
                        {
                            TypeHistonicId = 2,
                            Name = "Малая сцена"
                        },
                        new
                        {
                            TypeHistonicId = 3,
                            Name = "Для детей"
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

            modelBuilder.Entity("Teatr.Models.Histonic", b =>
                {
                    b.HasOne("Teatr.Models.Image", "Preview")
                        .WithMany("Preview")
                        .HasForeignKey("PreviewId");

                    b.HasOne("Teatr.Models.TypeHistonic", "Type")
                        .WithMany("Histonics")
                        .HasForeignKey("TypeId");

                    b.Navigation("Preview");

                    b.Navigation("Type");
                });

            modelBuilder.Entity("Teatr.Models.Image", b =>
                {
                    b.Navigation("Preview");
                });

            modelBuilder.Entity("Teatr.Models.TypeHistonic", b =>
                {
                    b.Navigation("Histonics");
                });
#pragma warning restore 612, 618
        }
    }
}
